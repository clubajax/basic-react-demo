import React from 'react';

export default function Display ({ onText, value }) {
	return (
		<section className="numbers">
			<input value={value} onKeyUp={onText}/>
		</section>
	);
}
