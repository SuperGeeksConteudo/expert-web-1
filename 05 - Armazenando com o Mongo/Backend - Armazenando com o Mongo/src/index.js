// importando o Express e o CORS
import express from "express" 
import cors from "cors" 

// importando a conexão e o usuario do banco de dados
import "./conexao.js"
import { usuario } from "./bancodados.js"

// criando o servidor
const servidor = express() 

// configurando o CORS e o JSON no express
servidor.use(cors())
servidor.use(express.json())

// criando rota "/" no metodo GET
servidor.get("/", async function(requisicao, resposta) { 
    const resultados = await usuario.find()
    resposta.status(200).json(resultados)
})

// criando rota "/" no metodo POST
servidor.post("/", async function(requisicao, resposta) {
    try {
        const novoUsuario = new usuario(requisicao.body)
        const resultado = await novoUsuario.save()
        resposta.status(201).json(resultado)
    }
    catch(erro) {
        console.log(erro.message)
        resposta.sendStatus(500)
    }
})

// criando rota de 404 nao encontrado
servidor.get("*", function(requisicao, resposta) {
    resposta.sendStatus(404)
})

// ligando o servidor
servidor.listen(4000, function() { 
    console.log("SERVIDOR EM FUNCIONAMENTO!") 
    console.log("http://localhost:4000/") 
})
