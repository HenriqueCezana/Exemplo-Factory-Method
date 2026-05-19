import { Carro } from "../classes/Carro.js";
import { Moto } from "../classes/Moto.js";
import { Caminhao } from "../classes/Caminhao.js";
export class VeiculoFactory {
    criarVeiculo(tipo) {
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
//# sourceMappingURL=VeiculoFactory.js.map