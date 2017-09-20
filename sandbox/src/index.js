// EXAMPLE 1 ----
// OF BASE BASE REACT
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import './index.css';

// V0
// const element = React.createElement( // React elements are object representaitons of some ui
// 	'div',
// 	{className: 'element'},
// 	"Text"
// );
//
// ReactDOM.render(elements, document.getElementById('root'));
// will return an object of this shape:
// {
//   type: 'div',
//   props: {
//     children: 'Text',
//     className: 'element'
//   }
// }
// and will look like this in the dom
// <div className='element'>Text</div>


// v1
// so now we can turn and use that single element in a component, which is why we're all here!
// a component is by defintion, a function OR a class, which (optionally accepts input and) returns a component
// so...
// function Button({ submitLogin }) {
//   return React.createElement(
//     'div',
//     {className: 'submit-login', onClick: submitLogin},
//     'Submit Login'
//   )
// }
//
// ReactDOM.render(React.createElement(Button, { submitLogin: () => console.log("submitting something") }), document.getElementById('root'))

// v2
class ShareDiv extends Component {
  render() {
    const { title, icon, color } = this.props;
    return (
      <div className={`share-item ${color}`}>
        <Picture src={icon}/>
        <h1 className="title">{title}</h1>
      </div>
    )
  }
}

const Picture = ({src}) => <i className={src} aria-hidden="true"/>

class ShareWidget extends Component {
  constructor() {
    super();
    this.socialIcons = [
      {title: "Facebook", icon: "fa fa-facebook-official", color: "blue"},
      {title: "Twitter", icon: "fa fa-twitter-square", color: "lightblue"},
      {title: "Instagram", icon: "fa fa-instagram", color: "purple"},
      // {title: "Google +", icon: "fa fa-google-plus-square", color: "red"}
    ];
  }
  render() {
    return (
      <div className="share-widget">
        {this.socialIcons.map( (icon, i) => <ShareDiv key={i} {...icon} /> )}
      </div>
    )
  }
}

ReactDOM.render(
  <ShareWidget />,
  document.getElementById('root')
);

// EXAMPLE 2
// OF BASE REACT
// class App extends Component {
// 	render() {
// 		return (
// 			React.createElement( // React elements are object representaitons of some UI
// 				'div',
// 				{className: 'parentDiv', key: 'div1', onClick: () => console.log(this)},
// 				['some data in parent div', React.createElement(
// 					'div',
// 					{className: 'childDiv', key: 'div2'},
// 					'some data in child div'
// 				)]
//
// 			)
// 		);
// 	}
// }
//
// ReactDOM.render(<App exampleProps={{config: {name: 'app1', env: 'someEnv', pen: 'pineapple apple pen'}}} />, document.getElementById('root'));
