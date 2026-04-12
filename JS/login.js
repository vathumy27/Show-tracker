
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const signupLink = document.getElementById("signupLink");


signupLink.addEventListener("click", () => {
  window.location.href = "Signup .html";
});


loginBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  
  const users = getUsers();

  const isValidUser = users.find(
    user => user.email === email && user.password === password
  );

  if (isValidUser) {
    alert("Login Successful");

    
    localStorage.setItem("loggedInUser", JSON.stringify(isValidUser));

    
    window.location.href = "index.html";
  } else {
    alert("Login Unsuccessful");
  }
});