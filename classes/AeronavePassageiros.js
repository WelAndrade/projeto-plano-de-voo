// classes/AeronavePassageiros.js
import AeronaveComercial from './AeronaveComercial.js';

export default class AeronavePassageiros extends AeronaveComercial {
    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCIA, maxPassageiros) {
        super(prefixo, velocidadeCruzeiro, autonomia, nomeCIA);
        this.maxPassageiros = maxPassageiros;
    }
}