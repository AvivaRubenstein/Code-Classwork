const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
// TODO: Add a comment describing the purpose of this variable.
  let count = 0;

  // TODO: Add a comment describing what is happening. 
  return function () {
  
   // TODO: Add a comment describing how this variable is being scoped. 
   //count is private to the clickHandler function (closure), meaning it can be accessed in this inner function, but can't be accessed outside of the outer function
    count++;
   // TODO: Add a comment describing how we are using the 'count' variable.
   //we are setting the text content of each of the buttons the have the number of times that button has been clicked
   //count increments when the click event happens
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
//we are looping through all of the buttons and setting an event handler to be attached to each one, with the clickHandler function to handle it
for (let i = 0; i < buttons.length; i++) {

  //because of the ()s after clickHandler, we are calling the click handler's INNER function to be returned, not running the outer function new every time
  //outer function is only happening for the first click on that button, so count doesn't get reset every time we click
  buttons[i].addEventListener('click', clickHandler());
  //basically, when we are creating the event listener, we are calling the clickHandler function (calling it w the parentheses)
  //then, what's returned from that function IS the inner function, so the inner function is what is called for every time we click after that
}
