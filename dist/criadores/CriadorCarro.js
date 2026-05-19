import { CriadorVeiculo } from "./CriadorVeiculo.js";
import { Carro } from "../classes/Carro.js";
export class CriadorCarro extends CriadorVeiculo {
    criarVeiculo() {
        return new Carro();
    }
}
//# sourceMappingURL=CriadorCarro.js.map