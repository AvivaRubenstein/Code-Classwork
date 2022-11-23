var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  if (element.matches (".box")) {
      var state = element.getAttribute("data-state");

  if (state === "hidden"){
    //the number is stored in this data attribute
    element.textContent = element.dataset.number;
    //and here we switch the state to visible
    element.dataset.state = "visible";
  }
  else {
    element.textContent = "";
    element.dataset.state = "visible";
    //display nothing

    //setting it back to hidden means that it can begin in the other state
    //after so that it can respond when clicked!
    element.setAttribute("data-state", "hidden");
  }

}
});

