// importando o mongoose
import mongoose from "mongoose"

// criando constantes para a conexao
const endereco = "mongodb+srv://admin:03yxzJ9v6hAISD3b@web.cfvnvjt.mongodb.net/?retryWrites=true&w=majority"
const configuracao = { useNewUrlParser: true, useUnifiedTopology: true }

// conectando com o mongodb
mongoose.connect(endereco, configuracao, function() {
    console.log("CONECTADO COM O BANCO DE DADOS!") 
})

// deixando a conexao do mongodb global
mongoose.Promise = global.Promise