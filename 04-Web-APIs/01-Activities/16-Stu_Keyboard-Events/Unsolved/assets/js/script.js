function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  var pressed = event.key;
  document.querySelector("#key").textContent = pressed;
  //var keyCode = event.keyCode;
  var keyCode =event.code;
  document.querySelector("#code").textContent = keyCode;
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

