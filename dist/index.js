import { CriadorCarro } from "./criadores/CriadorCarro.js";
import { CriadorMoto } from "./criadores/CriadorMoto.js";
import { CriadorCaminhao } from "./criadores/CriadorCaminhao.js";
const criadores = [
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
//# sourceMappingURL=index.js.map