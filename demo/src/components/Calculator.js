import React, { Component } from 'react';
import KeyPad from './KeyPad';
import Display from './Display';
import { getValue, getResult } from '../util/calc';
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
		let exp;
		const text = this.state.text;
		switch (value.type) {
			case 'digit':
				if(this.state.mode === 'operand'){
					this.setState({ text: value.value, mode: null });
				} else {
					this.setState({ text: text + value.value });
				}
				break;
			case 'clear':
				this.setState({ text: '', expression: [] });
				break;
			case 'backspace':
				this.setState({ text: text.substring(0, text.length - 1) });
				break;
			case 'percentage':
				this.setState({ text: Number(text) * 0.01 });
				break;
			case 'operand':
				exp = this.state.expression;
				if(!exp.length){
					exp.push({ text });
					exp.push({ operand: value.value });
				} else {
					exp[exp.length - 1].text = text;
					exp.push({ operand: value.value });
				}
				this.setState({
					expression: exp,
					mode: 'operand'
				});
				break;
			case 'equals':
				exp = this.state.expression;
				exp[exp.length - 1].text = text;
				this.setState({ text: getResult(exp), expression: [], mode: 'operand' });
				break;
			default:
				console.warn('unrecognized type', value.type);
		}
	}

	onButton (e) {
		this.display(getValue(e.target.textContent));

	}

	onText (e) {
		console.log('e.key', e.key);
		this.display(getValue(e.key));
	}

	render () {
		return (<div className="calculator">
			<header>Calculator</header>
			<Display onText={this.onText} value={this.state.text} />
			<KeyPad onButton={this.onButton}/>
		</div>);
	}
}
