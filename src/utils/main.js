import { getData, saveData }
from "./localstorage.js";

const users = getData("users");

const adminExists =
    users.some(
        user => user.role === "admin"
    );

if (!adminExists) {

    users.push({
        id: Date.now(),
        name: "Administrador",
        email: "admin@deliverybarber.com",
        password: "admin123",
        role: "admin"
    });

    saveData("users", users);
}