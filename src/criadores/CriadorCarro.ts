import { CriadorVeiculo } from "./CriadorVeiculo.js";
import { Veiculo } from "../interfaces/Veiculo.js";
import { Carro } from "../classes/Carro.js";

export class CriadorCarro extends CriadorVeiculo {
    criarVeiculo(): Veiculo {
        return new Carro();
    }
}