import { getCurrentUser } from "../controllers/user-controller.js";

const user = getCurrentUser();

if (!user) {
  window.location.href = "../auth/login.html";
}
