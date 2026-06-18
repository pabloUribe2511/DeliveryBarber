import { getCurrentUser }
from "../controllers/user-controller.js";

const user = getCurrentUser();

if (user.role !== "barber") {

    window.location.href =
        "../auth/login.html";

}