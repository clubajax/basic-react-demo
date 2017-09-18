import React, { Component } from 'react';
import KeyPad from './KeyPad';
import Display from './Display';
import getValue from '../util/calc';
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
				this.setState({
					expression: [...this.state.expression, {
						operand: value.value,
						text
					}],
					mode: 'operand'
				});
				break;
			case 'equals':
				console.log('CALC', this.state.expression); // plus current
				break;
			default:
				console.warn('unrecognized value type', value.type);
		}
	}

	onButton (e) {
		this.display(getValue(e.target.textContent));

	}

	onText (e) {
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
