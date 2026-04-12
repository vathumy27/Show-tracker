const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const signupBtn = document.getElementById("signupBtn");
const loginLink = document.getElementById("loginLink");




function validateName() {
  const value = nameInput.value.trim();

  if (value === "") {
    nameError.textContent = "Your name is required";
    return false;
  }

  if (!/^[A-Za-z]{6,}$/.test(value)) {
    nameError.textContent = "Name must be at least 6 letters and contain only alphabets";
    return false;
  }

  nameError.textContent = "";
  return true;
}


function validateEmail() {
  const value = emailInput.value.trim();

  if (value === "") {
    emailError.textContent = "Your email address is required";
    return false;
  }

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!pattern.test(value)) {
    emailError.textContent = "Your email address is invalid";
    return false;
  }

  emailError.textContent = "";
  return true;
}


function validatePassword() {
  const value = passwordInput.value;

  if (value === "") {
    passwordError.textContent = "Password is required";
    return false;
  }

  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8}$/;

  if (!pattern.test(value)) {
    passwordError.textContent =
      "Password must be 8 chars with uppercase, lowercase, number & symbol";
    return false;
  }

  passwordError.textContent = "";
  return true;
}


nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);



signupBtn.addEventListener("click", () => {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (!isNameValid || !isEmailValid || !isPasswordValid) {
    alert("Please fix validation errors");
    return;
  }

  const user = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Sign up successful");


  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
});


loginLink.addEventListener("click", () => {
  window.location.href = "login.html";
});