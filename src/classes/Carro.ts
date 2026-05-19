import { Veiculo } from "../interface/Veiculo.js";

export class Carro implements Veiculo {
    acelerar(): void {
        console.log("O carro acelerou!");
    }
}