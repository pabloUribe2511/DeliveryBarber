import { getCurrentUser }
from "../../../src/controllers/user-controller.js";

import {
    getClientAppointments
}
from "../../../src/controllers/appointment-controller.js";

const user = getCurrentUser();

const welcomeMessage =
    document.getElementById("welcomeMessage");

const appointmentsCount =
    document.getElementById("appointmentsCount");

const appointmentsContainer =
    document.getElementById("appointmentsContainer");

welcomeMessage.textContent =
    `Bienvenido ${user.name}`;

const appointments =
    getClientAppointments(user.id);

appointmentsCount.textContent =
    appointments.length;

if (appointments.length === 0) {

    appointmentsContainer.innerHTML = `
        <p>
            No tienes citas registradas.
        </p>
    `;

}

appointments.forEach((appointment) => {

    appointmentsContainer.innerHTML += `

        <div>

            <h3>
                ${appointment.service}
            </h3>

            <p>
                Fecha:
                ${appointment.date}
            </p>

            <p>
                Hora:
                ${appointment.time}
            </p>

            <p>
                Estado:
                ${appointment.status}
            </p>

        </div>

    `;

});