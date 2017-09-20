import React, { Component } from 'react';

export default class Display extends Component {
	render () {
		const { onText } = this.props;
		return (
			<section className="numbers">
				<input onKeyUp={onText} />
			</section>
		);
	}
}
