export default class Appointment {

    constructor(
        id,
        clientId,
        clientName,
        barberId,
        barberName,
        service,
        date,
        time,
        address,
        status = "pending"
    ) {

        this.id = id;

        this.clientId = clientId;
        this.clientName = clientName;

        this.barberId = barberId;
        this.barberName = barberName;

        this.service = service;

        this.date = date;
        this.time = time;

        this.address = address;

        this.status = status;
    }
}