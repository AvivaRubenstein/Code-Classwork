import React from 'react';

// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Hello` component is a child of our `App` component and is responsible for rendering the "Hello World" header.
function Hello() {
  const message = 'Hello world! I am a React Component';
  // The return statement contains something called "JSX" --we use it as if it is HTML
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  return (
    //we use className, not class bc it's jsx instead of HTML
    <div className="container">
      <h2>{message}</h2>
    </div>
  );
}

//we export our components to be imported into the App.js, or can import components into others to build a larger component
export default Hello;
