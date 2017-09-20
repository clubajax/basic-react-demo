export default `
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Element = React.createElement( // React elements are object representaitons of a DOM node
	'div',
	{className: 'share-article'},
	"Share This via FB"
)

ReactDOM.render(Element, document.getElementById('root'));`
