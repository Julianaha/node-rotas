class Dicas {
    static rotas(app) {

        app.get("/tips", (req, res) => {
            res.send("Devolve dica aleatoria")
        })

    }
}

export default Dicas;
