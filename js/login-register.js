const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Form submission handling
document.querySelector(".sign-in-form").addEventListener("submit", (e) => {
  e.preventDefault();
  // Add your login logic here
  console.log("Login form submitted");
});

document.querySelector(".sign-up-form").addEventListener("submit", (e) => {
  e.preventDefault();
  // Add your signup logic here
  console.log("Signup form submitted");
});

// Add smooth animations for input fields
const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.parentElement.classList.add("focused");
  });
  
  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.parentElement.classList.remove("focused");
    }
  });
});