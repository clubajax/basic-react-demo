export default `
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(React.createElement( // React elements are object representaitons of some ui
	'div',
	{className: 'test', name: 'tim'},
	"yoo"
), document.getElementById('root'), () => console.log("yooo"));`
