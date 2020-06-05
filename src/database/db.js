//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que vai operar no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//utilizar o obj de banco de dados para nossas operações
db.serialize(() => {
    //criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places(
            
        );

    
    `)




    //inserir dados
    //consuktar os dados
    //deletar os dados

})
