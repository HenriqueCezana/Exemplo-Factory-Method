import { CriadorVeiculo } from "./CriadorVeiculo.js";
import { Veiculo } from "../interfaces/Veiculo.js";
import { Caminhao } from "../classes/Caminhao.js";

export class CriadorCaminhao extends CriadorVeiculo {
    criarVeiculo(): Veiculo {
        return new Caminhao();
    }
}