import DicaModel from "../models/DicaModel.js";
import DatabaseMetodos from "../utils/DatabaseMetodos.js";


class Dicas {
    static rotas(app) {

        app.get("/tips", (req, res) => {
            res.send("Devolve dica aleatoria")
        })

    }
}

export default Dicas;
