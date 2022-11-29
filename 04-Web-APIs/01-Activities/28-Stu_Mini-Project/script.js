var container = document.querySelector("#container");
var start = document.querySelector("#start");
var timer = document.querySelector("#time");
var word = [];



start.addEventListener("click", function(event)
{
    setTimer();
})

function setTimer() {
    var secondsLeft = 10;

    var timeInterval = setInterval(function() {
      secondsLeft--;  //goes down by one second each time
      timer.textContent = secondsLeft + " seconds left";
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timeInterval);
        //nextWord();
      } 
    }, 1000);  //second parameter - in milliseconds
  }

container.addEventListener("keydown", function(event){
    var key 
})

