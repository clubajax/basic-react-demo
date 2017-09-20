import React, { Component } from 'react';
import '../styles/Calculator.css';

export default class Calculator extends Component {
	constructor () {
		super();

		this.onButton = this.onButton.bind(this);
		this.onText = this.onText.bind(this);
	}

	onButton (e) {
		console.log('button', e.target.value);
	}

	onText (e) {
		console.log('e.key', e.key);
	}

	render () {
		return (<div className="calculator">
			<header>Calculator</header>
			<section className="numbers">
				<input onKeyUp={this.onText}/>
			</section>
			<section className="buttons" onClick={this.onButton}>
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
		</div>);
	}
}
