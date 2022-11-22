var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'This message should display one word at a time.';
var words = message.split(' ');


function countdown() {
  var timeLeft = 6;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
   timeLeft --;
   timerEl.textContent = "Countdown: "  + timeLeft + " seconds left";

   //when timer gets to 0, we stop the interval, and begin the displayMessage function
   if(timeLeft === 0) {
    clearInterval(timeInterval);
    timerEl.textContent = "Go!";
    displayMessage();
   }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
      mainEl.textContent = "That's all, folks!";
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 500);
}

countdown();
