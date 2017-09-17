import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Calculator from './components/Calculator';

class App extends Component {
	render () {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<Calculator />
			</div>
		);
	}
}

export default App;
