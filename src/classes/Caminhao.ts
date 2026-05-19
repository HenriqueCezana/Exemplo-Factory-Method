import { Veiculo } from "../interfaces/Veiculo.js";

export class Caminhao implements Veiculo {
    acelerar(): void {
        console.log("O caminhão acelerou!");
    }

    freiar(): void {
        console.log("O caminhão freiou!");
    }
}