import { VeiculoFactory } from "./factory/VeiculoFactory.js";

const fabrica = new VeiculoFactory();

const veiculo1 = fabrica.criarVeiculo("carro");
veiculo1.acelerar();

const veiculo2 = fabrica.criarVeiculo("moto");
veiculo2.acelerar();

const veiculo3 = fabrica.criarVeiculo("caminhao");
veiculo3.acelerar();

/*const veiculo4 = fabrica.criarVeiculo("barco");
veiculo4.acelerar();*/