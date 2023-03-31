import React from 'react';
// TODO: Fix the return statement so that it renders an `h1` heading tag that introduces the creator
function HelloDiv() {
  const hello = "Hello! My name is <insert name here>";
  
  return (
    <div className= 'container'>
    <h1>{hello}</h1>
    <ul> 
      <li>I like Isaac</li>
      <li>He da bomb </li>
    </ul>
    </div>
    ) ;
}

// TODO: Fix the export statement
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file
export default HelloDiv;
