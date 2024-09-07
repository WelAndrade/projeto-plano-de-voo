// main.js

//Executar o comando node start para rodar o exemplo.

// Importando as classes necessárias
import Sistema from './classes/Sistema.js';
import Piloto from './classes/Piloto.js';
import AeronaveParticular from './classes/AeronaveParticular.js';
import AeronavePassageiros from './classes/AeronavePassageiros.js';
import AeronaveCarga from './classes/AeronaveCarga.js';
import Aerovia from './classes/Aerovia.js';
import PlanoDeVoo from './classes/PlanoDeVoo.js';

const sistema = new Sistema();

// Adicionando pilotos inspirados em personagens de quadrinhos
const piloto1 = new Piloto('123', 'Hal Jordan', true);
const piloto2 = new Piloto('456', 'Carol Danvers', true);
const piloto3 = new Piloto('789', 'Tony Stark', true);
sistema.servicoPilotos.adicionarPiloto(piloto1);
sistema.servicoPilotos.adicionarPiloto(piloto2);
sistema.servicoPilotos.adicionarPiloto(piloto3);
console.log('Pilotos adicionados:', sistema.servicoPilotos.todos());

// Adicionando aeronaves
const aeronaveParticular = new AeronaveParticular('PT-XYZ', 500, 1000, 'Andrade Corp');
const aeronavePassageiros = new AeronavePassageiros('CM-123', 800, 3000, 'SpaceY', 180);
const aeronaveCarga = new AeronaveCarga('CG-321', 650, 2500, 'CargaBrasil', 20);
sistema.servicoAeronaves.adicionarAeronave(aeronaveParticular);
sistema.servicoAeronaves.adicionarAeronave(aeronavePassageiros);
sistema.servicoAeronaves.adicionarAeronave(aeronaveCarga);
console.log('Aeronaves adicionadas:', sistema.servicoAeronaves.todas());

// Adicionando aerovias com dados reais de aeroportos brasileiros
const aerovia1 = new Aerovia('A1', 'SBGR (Guarulhos)', 'SBRJ (Santos Dumont)', 300);
const aerovia2 = new Aerovia('A2', 'SBSP (Congonhas)', 'SBFL (Florianópolis)', 450);
const aerovia3 = new Aerovia('A3', 'SBCF (Confins)', 'SBPA (Porto Alegre)', 600);
const aerovia4 = new Aerovia('A4', 'SBCT (Curitiba)', 'SBRF (Recife)', 550);
const aerovia5 = new Aerovia('A5', 'SBGL (Galeão)', 'SBEG (Manaus)', 400);
sistema.servicoAerovias.adicionarAerovia(aerovia1);
sistema.servicoAerovias.adicionarAerovia(aerovia2);
sistema.servicoAerovias.adicionarAerovia(aerovia3);
sistema.servicoAerovias.adicionarAerovia(aerovia4);
sistema.servicoAerovias.adicionarAerovia(aerovia5);
console.log('Aerovias adicionadas:', sistema.servicoAerovias.todas());

// Criando e aprovando planos de voo
const planos = [
    new PlanoDeVoo('001', '123', 'A1', '2024-10-12', '10:00', 28000, [10]),
    new PlanoDeVoo('002', '456', 'A2', '2024-10-13', '11:00', 29000, [11]),
    new PlanoDeVoo('003', '789', 'A3', '2024-10-14', '12:00', 30000, [12]),
    new PlanoDeVoo('004', '123', 'A4', '2024-10-15', '13:00', 31000, [13]),
    new PlanoDeVoo('005', '456', 'A5', '2024-10-16', '14:00', 32000, [14])
];
planos.forEach(plano => {
    sistema.aprovarPlanoDeVoo(plano);
});
console.log('Planos de Voo Aprovados:', planos.map(plano => sistema.listarPlano(plano.id)));
