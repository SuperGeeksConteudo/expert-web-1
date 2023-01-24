//importando o notifier, mongoose, dotenv
import notifier from "node-notifier"
import mongoose from "mongoose"
import "dotenv/config"

// declarando variaveis de configuracoes
const endereco = process.env.MONGO
const opcao = { useNewUrlParser: true, useUnifiedTopology: true }

// conectando com o banco de dados
mongoose.connect(endereco, opcao)

    // notificar caso bem sucedido
    .then(function() {
        notifier.notify({ title: "proj07", message: "BANCO DE DADOS CONECTADO!", icon: "/" })
    })

    // mostrar o erro caso nao sucedido
    .catch(function(erro) {
        console.log(erro.message)
    })
    