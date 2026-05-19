import { Veiculo } from "../interface/Veiculo.js";

export class Moto implements Veiculo {
    acelerar(): void {
        console.log("A moto acelerou!");
    }
}