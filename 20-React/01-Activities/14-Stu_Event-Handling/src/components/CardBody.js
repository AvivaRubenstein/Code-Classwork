import React from 'react';

// TODO: Add a comment explaining what is being passed to this "child" component as props
//the props that are passed into the CardBody are the functions returned in the Counter.js file
//the count, increment function, and decrement function are passed as props to CardBody from the Counter component
function CardBody(props) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {props.count}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleIncrement}
      >
        Increment
      </button>{' '}
      <button
        type="button"
        className="btn btn-danger"
        onClick={props.handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default CardBody;
