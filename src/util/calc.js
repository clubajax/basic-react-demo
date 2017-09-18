
function getType (value) {
	if(/\d|\./.test(value)){
		return 'digit';
	} else if (/\+|x|÷|-/.test(value)) {
		return 'operand';
	}

	return {
		'=': 'equals',
		'c': 'clear',
		'bk': 'backspace',
		'%': 'percentage'
	}[value.toLowerCase()];
}

export function getValue (value) {
	return {
		value: value,
		type: getType(value)
	};
}

const maths = {
	'+': (a) => (b) => b + a,
	'-': (a) => (b) => b - a,
	'÷': (a) => (b) => b / a,
	'x': (a) => (b) => b * a,
	'undefined': (a) => () => a
};

export function getResult (expression) {
	console.log('expression', expression);

	return expression.map((value) => {
		const num = Number(value.text);
		console.log('num', num, value.operand, maths[value.operand]);
		return maths[value.operand](num);
	}).reduce((result, fn) => {
		return fn(result);
	}, 0);
}
