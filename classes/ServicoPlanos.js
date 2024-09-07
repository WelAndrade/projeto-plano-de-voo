// classes/ServicoPlanos.js
import PlanoDeVoo from './PlanoDeVoo.js';

export default class ServicoPlanos {
    constructor() {
        this.planos = [];
    }

    consiste(plano) {
        // Implement logic to check if the flight plan is valid
    }

    recupera(id) {
        return this.planos.find(plano => plano.id === id);
    }

    adicionarPlano(plano) {
        this.planos.push(plano);
    }
}