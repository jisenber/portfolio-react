import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello, {this.props.greetTarget}</h1>;
  }
}

ReactDOM.render(
  <div>
    <HelloWorld greetTarget="Jacob"/>
    <HelloWorld greetTarget='Bert'/>
    <HelloWorld greetTarget='Nedrick'/>
  </div>,
  document.querySelector('#container')
);
