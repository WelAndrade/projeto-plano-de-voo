// classes/Sistema.js
import ServicoAerovias from './ServicoAerovias.js';
import ServicoAeronaves from './ServicoAeronaves.js';
import ServicoPilotos from './ServicoPilotos.js';
import ServicoPlanos from './ServicoPlanos.js';

export default class Sistema {
    constructor() {
        this.servicoAerovias = new ServicoAerovias();
        this.servicoAeronaves = new ServicoAeronaves();
        this.servicoPilotos = new ServicoPilotos();
        this.servicoPlanos = new ServicoPlanos();
    }

    listarAerovias(origem, destino) {
        return this.servicoAerovias.recupera(origem, destino);
    }

    listarAltitudesLivres(idAerovia, data, hora) {
        // Implement logic to list free altitudes
    }

    aprovarPlanoDeVoo(plano) {
        this.servicoPlanos.consiste(plano);
        this.servicoPlanos.adicionarPlano(plano);
        return plano.id;
    }

    listarPlano(id) {
        return this.servicoPlanos.recupera(id);
    }
}