import { Veiculo } from "../interfaces/Veiculo.js";

export abstract class CriadorVeiculo {

    abstract criarVeiculo(): Veiculo;

    executarAcao(): void {
        const veiculo = this.criarVeiculo();
        veiculo.acelerar();
        veiculo.freiar();
    }
}