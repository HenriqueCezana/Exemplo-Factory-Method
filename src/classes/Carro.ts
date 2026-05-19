import { Veiculo } from "../interfaces/Veiculo.js";

export class Carro implements Veiculo {
    acelerar(): void {
        console.log("O carro acelerou!");
    }

    freiar(): void {
        console.log("O carro freiou!");
    }
}