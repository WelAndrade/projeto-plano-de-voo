// classes/AeronaveComercial.js
import Aeronave from './Aeronave.js';

export default class AeronaveComercial extends Aeronave {
    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCIA) {
        super(prefixo, velocidadeCruzeiro, autonomia);
        this.nomeCIA = nomeCIA;
    }
}