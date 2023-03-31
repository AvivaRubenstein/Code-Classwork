import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// The ReactDOM.render method is used to render a react element into the actual DOM
// The first argument is the component we want to render, and the second is the container element on the page
//connects our reactdom to our application -- connect it to the root of our HTML file
ReactDOM.render(<App />, document.getElementById('root'));
