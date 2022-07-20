import { Database } from "../infra/Database.js"

class DatabaseMetodos {
    static gravaDica(dica){
        Database.Dicas = [...Database.Dicas, dica]
        return Database.Dicas
    }

    static  devolveDica(){
        return Database.Dicas
    }
}

export default DatabaseMetodos