import { getCurrentUser }
from "../controllers/user-controller.js";

const user = getCurrentUser();

if (user.role !== "client") {

    window.location.href =
        "../auth/login.html";

}