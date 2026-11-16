const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const passwordToggle = document.getElementById("passwordToggle");
const formMessage = document.getElementById("formMessage");
const createAccount = document.getElementById("createAccount");

passwordToggle.addEventListener("click", () => {
  const reveal = password.type === "password";
  password.type = reveal ? "text" : "password";
  passwordToggle.setAttribute("aria-label", reveal ? "Hide password" : "Show password");
  passwordToggle.title = reveal ? "Hide password" : "Show password";
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = username.value.trim();
  const pass = password.value;

  if (!user || !pass) {
    formMessage.textContent = "Please enter your username and password.";
    formMessage.style.color = "#ff9b9b";
    (!user ? username : password).focus();
    return;
  }

  // Demo-only interaction: no credentials are sent to a server.
  formMessage.style.color = "#85f3bd";
  formMessage.textContent = `Welcome, ${user}! Demo login submitted.`;
});

createAccount.addEventListener("click", (event) => {
  event.preventDefault();
  formMessage.style.color = "#00e5ff";
  formMessage.textContent = "Account registration is not connected in this demo.";
});
