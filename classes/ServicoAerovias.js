// classes/ServicoAerovias.js
import Aerovia from './Aerovia.js';

export default class ServicoAerovias {
    constructor() {
        this.aerovias = [];
    }

    todas() {
        return this.aerovias;
    }

    recupera(origem, destino) {
        return this.aerovias.filter(aerovia => aerovia.origem === origem && aerovia.destino === destino);
    }

    adicionarAerovia(aerovia) {
        this.aerovias.push(aerovia);
    }
}