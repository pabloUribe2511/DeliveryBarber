import {
  loginUser,
  redirectByRole,
} from "../../../src/controllers/user-controller.js";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  const user = loginUser(email, password);

  if (!user) {
    alert("Correo o contraseña incorrectos");

    return;
  }

  redirectByRole(user);
});
