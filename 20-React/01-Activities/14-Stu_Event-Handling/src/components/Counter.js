import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  //we are setting a default value for count = 0, and are setting up the setCount function to update the count variable 
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  //we are setting up a function to handle incrementing the count
  //when the increment button is clicked, this function will pass count +1 to the setCount function, setting the count variable 1 higher
  //in the CardBody component, the increment button has onClick={props.handleIncrement}, which attaches this function to click events
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody 
      in this case, the count, the handleIncrement and handleDecrement functions are all being
      passed into the CardBody 
      CardBody is a component INSIDE of the Counter component -- and we are passing these values in as props
      to the CardBody component*/}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
