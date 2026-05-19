import { CriadorVeiculo } from "./CriadorVeiculo.js";
import { Moto } from "../classes/Moto.js";
export class CriadorMoto extends CriadorVeiculo {
    criarVeiculo() {
        return new Moto();
    }
}
//# sourceMappingURL=CriadorMoto.js.map