import { Veiculo } from "../interfaces/Veiculo.js";

export class Moto implements Veiculo {
    acelerar(): void {
        console.log("A moto acelerou!");
    }
}