import React, { Component } from 'react';
import KeyPad from './KeyPad';
import Display from './Display';
import '../styles/Calculator.css';

export default class Calculator extends Component {
	constructor () {
		super();

		this.state = {
			text: ''
		};

		this.onButton = this.onButton.bind(this);
		this.onText = this.onText.bind(this);
	}

	onButton (e) {
		const value = e.target.textContent;
		const isDigit = /\d|\./.test(value);
		const isEquals = value === '=';
		const isOperand = /\+|x|÷|-/.test(value);

		if(isDigit){
			this.setState({ text: this.state.text + value });
		}
	}

	onText (e) {
		console.log('e', e.key);
		const value = e.target.textContent;
	}

	render () {
		return (<div className="calculator">
			<header>Calculator</header>
			<Display onText={this.onText} value={this.state.text} />
			<KeyPad onButton={this.onButton}/>
		</div>);
	}
}
