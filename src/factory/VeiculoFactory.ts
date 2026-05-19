import { Veiculo } from "../interface/Veiculo.js";
import { Carro } from "../classes/Carro.js";
import { Moto } from "../classes/Moto.js";
import { Caminhao } from "../classes/Caminhao.js";

export class VeiculoFactory {

    criarVeiculo(tipo: string): Veiculo {

        if (tipo === "carro") {
            return new Carro();
        }

        if (tipo === "moto") {
            return new Moto();
        }

        if (tipo === "caminhao") {
            return new Caminhao();
        }

        throw new Error("Tipo de veículo inválido!");
    }
}