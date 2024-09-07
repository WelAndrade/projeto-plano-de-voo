// classes/AeronaveCarga.js
import AeronaveComercial from './AeronaveComercial.js';

export default class AeronaveCarga extends AeronaveComercial {
    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCIA, pesoMax) {
        super(prefixo, velocidadeCruzeiro, autonomia, nomeCIA);
        this.pesoMax = pesoMax;
    }
}