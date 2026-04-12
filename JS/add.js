const addBtn = document.getElementById("addBtn");
const showNameInput = document.getElementById("showName");
const message = document.getElementById("message");

addBtn.addEventListener("click", function () {
  const name = showNameInput.value.trim();

  
  if (!/^[A-Za-z]/.test(name)) {
    message.style.color = "red";
    message.textContent = "Invalid TV Show name";
    return;
  }

  
  message.style.color = "green";
  message.textContent = name + " has been added";

  
  showNameInput.value = "";
});