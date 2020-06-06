//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que vai operar no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
 
//utilizar o obj de banco de dados para nossas operações
/*db.serialize(() => {
  
//criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            adress TEXT,
            adress2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)  

    //inserir dados da tabela
        const query = `
        INSERT INTO places (
            image,
            name,
            adress,
            adress2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
            "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80 ",
            "Papersider",
            "Guilherme Gembala, Jardim América",
            "Número 260",
            "Santa Catarina",
            "Rio do Sul",
            "Papéis e Papelão"
        ]

        function afterInsertData(err) {
            if(err) {
                return console.log(err)
            }

            console.log("Cadastrado com sucesso")
            console.log(this)
        }
           //db.run(query, values, afterInsertData)

        //deletar dado
    
})

//consultar os dados da tabela
db.all(`SELECT name FROM places`, function(err,rows) {
    if(err) {
        return console.log(err)
    }

    console.log("Aqui estão seus registros!")
    console.log(rows)
})

db.run(`DELETE FROM places WHERE id = ?`, [46], function(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Registro deletado com sucesso")
    })     
*/    
 

