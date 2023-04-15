const firstName = document.getElementById("fname");

const lastName = document.getElementById("lname");
const emailAddress = document.getElementById("email");
const password = document.getElementById("password");

const warningFirstName = document.getElementById("warning-message-fname");
const warningFirstNameInitial = warningFirstName.innerHTML;

const warningLastName = document.getElementById("warning-message-lname");
const warningLastNameInitial = warningLastName.innerHTML;

const warningEmail = document.getElementById("warning-message-email");
const warningPassword = document.getElementById("warning-message-password");

const submitButton = document.getElementById("submit-btn");
const warningSubmit = document.getElementById("warning-message-submit");

let validFirstName = false;
let validLastName = false;
let validEmail = false;
let validPassword = false;

submitButton.addEventListener("click", validateFun);

function validateFun() {


  // First name validation
  const firstNameValue = firstName.value;
  const firstNameTrim = firstNameValue.trim();
  const letterPattern = /^[A-Za-z]+$/;

  if (firstNameValue.length == 0) {
    warningFirstName.innerHTML = warningFirstNameInitial;
    warningFirstName.classList.remove("hidden");
    firstName.classList.add("empty-input");
    validFirstName = false;
  } else if (!letterPattern.test(firstNameTrim)) {
    warningFirstName.innerHTML = "First name can only contain letters!";
    warningFirstName.classList.remove("hidden");
    firstName.classList.add("empty-input");
    validFirstName = false;
  } else {
    warningFirstName.classList.add("hidden");
    firstName.classList.remove("empty-input");
    validFirstName = true;
  }


  // Last name validation
  const lastNameValue = lastName.value;
  const lastNameTrim = lastNameValue.trim();

  if (lastNameValue.length == 0) {
    warningLastName.innerHTML = warningLastNameInitial;
    warningLastName.classList.remove("hidden");
    lastName.classList.add("empty-input");
    validLastName = false;
  } else if (!letterPattern.test(lastNameTrim)) {
    warningLastName.innerHTML = "last name can only contain letters!";
    warningLastName.classList.remove("hidden");
    lastName.classList.add("empty-input");
    validLastName = false;
  } else {
    warningLastName.classList.add("hidden");
    lastName.classList.remove("empty-input");
    validLastName = true;
  }



  // Email validation
  const emailInput = emailAddress.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailPattern.test(emailInput);

  if (!isValid) {
    warningEmail.classList.remove("hidden");
    emailAddress.classList.add("empty-input");
    validEmail = false;
 
  } else {
    warningEmail.classList.add("hidden");
    emailAddress.classList.remove("empty-input");
    validEmail = true;

  }



  // Password validation
  const passwordValue = password.value;
  const passwordTrim = passwordValue.trim();
  const capitalLetterPattern = /[A-Z]/;
  const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;
  const numberPattern = /\d/;

  if (
    passwordValue.length > 8 &&
    capitalLetterPattern.test(passwordTrim) &&
    specialCharacterPattern.test(passwordTrim) &&
    numberPattern.test(passwordTrim)
  ) {
    warningPassword.classList.add("hidden");
    password.classList.remove("empty-input");
    validPassword = true;
  } else {
    warningPassword.classList.remove("hidden");
    password.classList.add("empty-input");
    validPassword = false;
  }




  // Submit button check
  if (validFirstName && validLastName && validEmail && validPassword) {
    submitButton.innerHTML = "CHECK YOUR INBOX!";
    warningSubmit.classList.add("hidden");


  } else {
    submitButton.innerHTML = "CLAIM YOUR FREE TRIAL";
    warningSubmit.classList.remove("hidden");
  }
}
