var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submissio
 var  user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim() 
 };

  // TODO: Set new submission to local storage 
    localStorage.setItem("user", JSON.stringify(user));
  
});


//verify that by going into devtools, application, local storage
//to read the data--- you can see the key and the value associated with it