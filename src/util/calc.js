
function getType (value) {
	if(/\d|\./.test(value)){
		return 'digit';
	} else if (/\+|x|÷|-|\*|\//.test(value)) {
		return 'operand';
	}

	return {
		'enter': 'equals',
		'=': 'equals',
		'c': 'clear',
		'escape': 'clear',
		'bk': 'backspace',
		'backspace': 'backspace',
		'%': 'percentage'
	}[value.toLowerCase()];
}

export function getValue (value) {
	return {
		value: value === 'Enter' ? '=' : value,
		type: getType(value)
	};
}

const maths = {
	'+': (a) => (b) => b + a,
	'-': (a) => (b) => b - a,
	'÷': (a) => (b) => b / a,
	'/': (a) => (b) => b / a,
	'x': (a) => (b) => b * a,
	'*': (a) => (b) => b * a,
	'undefined': (a) => () => a
};

export function getResult (expression) {
	//console.log('expression', expression);

	return expression.map((value) => {
		const num = Number(value.text);
		return maths[value.operand](num);
	}).reduce((result, fn) => {
		return fn(result);
	}, 0);
}
