import { CriadorVeiculo } from "./CriadorVeiculo.js";
import { Caminhao } from "../classes/Caminhao.js";
export class CriadorCaminhao extends CriadorVeiculo {
    criarVeiculo() {
        return new Caminhao();
    }
}
//# sourceMappingURL=CriadorCaminhao.js.map