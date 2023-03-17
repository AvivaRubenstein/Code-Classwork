// // function to block the stack for x number of milliseconds
// const pause = milliSeconds => {
//   // get the current time
//   var startTime = new Date().getTime(); 
//   // block stack until time's up
//   while (new Date().getTime() < startTime + milliSeconds); 
// }

// pause(8000);
function pause() {
  var submitBtn = document.querySelector('.submit');
  submitBtn.setAttribute("hidden", true);
  console.log("it is hidden")
function start () {
  setTimeout(() => {
    submitBtn.setAttribute("hidden", false);
    console.log("it is visible")
  }, 8000);
} 
start();
}
 
pause();
