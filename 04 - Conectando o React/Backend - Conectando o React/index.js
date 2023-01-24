// importando o express, CORS e conteudos
import express from "express"
import cors from "cors"
import { conteudos } from "./conteudos.js"

// declarando o servidor
const servidor = express()

// configurando o servidor
servidor.use(cors())
servidor.use(express.json())
servidor.use(express.static("public"))

// definindo rota get
servidor.get("/", function(requisicao, resposta) {
    resposta.json(conteudos)
})

// iniciando o servidor na porta 4000
servidor.listen(4000, function() {
    console.log("SERVIDOR EM FUNCIONAMENTO!")
    console.log("http://localhost:4000/")
})
