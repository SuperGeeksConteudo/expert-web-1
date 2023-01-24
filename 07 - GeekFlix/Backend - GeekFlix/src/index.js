// importando o notifier, express, morgan, cors e express
import notifier from "node-notifier"
import express from "express"
import morgan from "morgan"
import cors from "cors"

// importando a conexao com o banco de dados
import "./database/Conexao.js"

// importando as rotas
import Rotas from "./Rotas.js"

// declarando o servidor
const servidor = express()

// configurando o servidor
servidor.use(cors())
servidor.use(express.json())
servidor.use(morgan("dev"))

// incluindo as rotas
servidor.use(Rotas)

// ligando o servidor na porta 400
servidor.listen(4000, function() {
    notifier.notify({ title: "proj07", message: "SERVIDOR EM FUNCIONAMENTO", icon: "/" })
})