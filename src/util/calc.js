
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

export default function getValue (value) {
	return {
		value: value,
		type: getType(value)
	};
}
