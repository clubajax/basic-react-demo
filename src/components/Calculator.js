import React, { Component } from 'react';
import KeyPad from './KeyPad';
import Display from './Display';
import { getValue } from '../util/calc';
import '../styles/Calculator.css';

export default class Calculator extends Component {
	constructor () {
		super();

		this.state = {
			text: '',
			mode: null,
			expression: []
		};

		this.onButton = this.onButton.bind(this);
		this.onText = this.onText.bind(this);
	}

	display (value) {
		const text = this.state.text;
		if (value.type === 'digit') {
			this.setState({ text: text + value.value });
		}
		else if (value.type === 'clear') {
			this.setState({ text: '' });
		}
	}

	onButton (e) {
		const value = getValue(e.target.textContent);
		console.log('button', value);
		this.display(value);
	}

	onText (e) {
		const value = getValue(e.key);
		console.log('e.key', value);
		this.display(value);
	}

	render () {
		return (<div className="calculator">
			<header>Calculator</header>
			<Display onText={this.onText} value={this.state.text} />
			<KeyPad onButton={this.onButton}/>
		</div>);
	}
}
