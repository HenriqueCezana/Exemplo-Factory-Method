import { CriadorVeiculo } from "./criadores/CriadorVeiculo.js";
import { CriadorCarro } from "./criadores/CriadorCarro.js";
import { CriadorMoto } from "./criadores/CriadorMoto.js";
import { CriadorCaminhao } from "./criadores/CriadorCaminhao.js";

const criadores: Array<CriadorVeiculo> = [
    new CriadorCarro(),
    new CriadorCarro(),
    new CriadorMoto(),
    new CriadorMoto(),
    new CriadorCaminhao(),
    new CriadorCaminhao()
];

criadores.forEach((criador) => {
    criador.executarAcao();
});