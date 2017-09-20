import React, { Component } from 'react';

export default class KeyPad extends Component {

	render () {
		const { onButton } = this.props;
		return (
			<section className="buttons" onClick={onButton}>
				<button className="fn">C</button>
				<button className="fn">BK</button>
				<button className="fn">%</button>
				<button className="op">÷</button>
				<button>7</button>
				<button>8</button>
				<button>9</button>
				<button className="op">x</button>
				<button>4</button>
				<button>5</button>
				<button>6</button>
				<button className="op">-</button>
				<button>1</button>
				<button>2</button>
				<button>3</button>
				<button className="op">+</button>
				<button className="dbl">0</button>
				<button>.</button>
				<button className="op">=</button>
			</section>
		);
	}
}