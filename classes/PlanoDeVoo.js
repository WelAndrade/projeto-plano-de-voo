// classes/PlanoDeVoo.js
export default class PlanoDeVoo {
    constructor(id, matriculaPiloto, idAerovia, data, horario, altitude, slots) {
        this.id = id;
        this.matriculaPiloto = matriculaPiloto;
        this.idAerovia = idAerovia;
        this.data = data;
        this.horario = horario;
        this.altitude = altitude;
        this.slots = slots;
        this.cancelado = false;
    }
}