import { CriadorVeiculo } from "./CriadorVeiculo.js";
import { Veiculo } from "../interfaces/Veiculo.js";
import { Moto } from "../classes/Moto.js";

export class CriadorMoto extends CriadorVeiculo {
    criarVeiculo(): Veiculo {
        return new Moto();
    }
}