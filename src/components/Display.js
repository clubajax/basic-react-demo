import React, { Component } from 'react';

export default class Display extends Component {
	render () {
		const { onText, value } = this.props;
		return (
			<section className="numbers">
				<input value={value} onKeyUp={onText} />
			</section>
		);
	}
}
