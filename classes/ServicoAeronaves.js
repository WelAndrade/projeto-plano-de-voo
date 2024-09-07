// classes/ServicoAeronaves.js
import Aeronave from './Aeronave.js';

export default class ServicoAeronaves {
    constructor() {
        this.aeronaves = [];
    }

    todas() {
        return this.aeronaves;
    }

    adicionarAeronave(aeronave) {
        this.aeronaves.push(aeronave);
    }
}