// classes/AeronaveParticular.js
import Aeronave from './Aeronave.js';

export default class AeronaveParticular extends Aeronave {
    constructor(prefixo, velocidadeCruzeiro, autonomia, respManutencao) {
        super(prefixo, velocidadeCruzeiro, autonomia);
        this.respManutencao = respManutencao;
    }
}