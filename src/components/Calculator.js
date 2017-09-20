import React, { Component } from 'react';
import KeyPad from './KeyPad';
import Display from './Display';
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

	onButton (e) {
		console.log('button', e.target.textContent);
	}

	onText (e) {
		console.log('e.key', e.key);
	}

	render () {
		return (<div className="calculator">
			<header>Calculator</header>
			<Display onText={this.onText} value={this.state.text} />
			<KeyPad onButton={this.onButton}/>
		</div>);
	}
}
