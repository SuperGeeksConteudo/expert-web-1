// importar joi, express, crypto e mongoose
import Joi from "joi"
import express from "express"
import crypto from "crypto-js"
import { Types, isValidObjectId } from "mongoose"

// importando o conteudo e usuarios
import { conteudo } from "./database/Conteudo.js"
import { usuario } from "./database/Usuario.js"

// declarando a rota
const rotas = express.Router()

// definindo rota get /conteudo
rotas.get("/conteudos", function(requisicao, resposta) {
    
    // encontrando os conteudos
    conteudo.find()

        // retornando os valores caso bem sucedido
        .then(function(resultados) {

            if (resultados.length > 0) resposta.status(200).json(resultados)
    
            else resposta.status(404).json({ mensagem: "Nenhum resultado encontrado!" })

        })

        // retornando erro caso nao sucedido
        .catch(function(erro) {
            resposta.status(500).json({ mensagem: erro.message })
        })

})

// definindo rota get /generos
rotas.get("/generos", function(requisicao, resposta) {
    
    // encontrando o conteudo
    conteudo.find()

        // retornando os valores caso bem sucedido
        .then(function(resultados) {

            if (resultados.length > 0) {

                var lista = new Array()
                
                resultados.map(function(conteudo) {

                    // filtando com o genero
                    if (!lista.includes(conteudo.genero))
                        return lista.push(conteudo.genero)

                })

                resposta.status(200).json(lista)

            }
    
            else 
                resposta.status(404).json({ mensagem: "Nenhum resultado encontrado!" })

        })

        // retornando erro caso nao sucedido
        .catch(function(erro) {
            resposta.status(500).json({ mensagem: erro.message })
        })

})

// definindo a rota get /conteudo/:codigo
rotas.get("/conteudo/:codigo", function(requisicao, resposta) {
   
    // obtendo o codigo do endereco
    const { codigo } = requisicao.params

    // verificando se o codigo e valido
    if (isValidObjectId(codigo)) {

        // procurando o conteudo pelo id
        conteudo.findById( Types.ObjectId(codigo) )

            // retornando os valores caso bem sucedido
            .then(function(resultado) {

                if (resultado) resposta.status(200).json(resultado)

                else resposta.status(404).json({ mensagem: "Nenhum resultado encontrado!" })
                
            })

            // retornando erro caso nao sucedido
            .catch(function(erro) {
                resposta.status(500).json({ mensagem: erro.message })
            })

    }

    // retornando erro caso codigo invalido
    else resposta.status(400).json({ mensagem: "Código invalido!" })

})

// definindo a rota post /conteudo
rotas.post("/conteudo", async function(requisicao, resposta) {
    
    // obtendo o corpo da requisicao
    const corpo = requisicao.body

    // definindo um esquema de validacao joi
    const esquema = Joi.object({
        capa: Joi.string().uri().required(),
        trilha: Joi.string().uri().required(),
        titulo: Joi.string().required(),
        descricao: Joi.string(),
        genero: Joi.string().required(),
        ano: Joi.number().required(),
        duracao: Joi.number().required(),
        faixa: Joi.number().required()
    })

    // tentar validar o corpo recebido
    try {
        const validado = await esquema.validateAsync(corpo)

        const novoConteudo = new conteudo(validado)

        // salvar o conteudo no banco de dados
        novoConteudo.save()

            // retornando os valores caso bem sucedido
            .then(function(resultado) {
                resposta.status(201).json(resultado)
            })

            // retornando erro caso nao sucedido
            .catch(function(erro) {
                resposta.status(500).json({ mensagem: erro.message })
            })

    }

    // retornando erro caso valores sejam invalidos
    catch(erro) {
        resposta.status(400).json({ mensagem: erro.message })
    }

})

// definindo a rota post /entrar
rotas.post("/entrar", async function(requisicao, resposta) {

    // recebendo o corpo da requisicao
    const corpo = requisicao.body

    // declarando um esquema de validacao
    const esquema = Joi.object({
        email: Joi.string().email().max(128).required(),
        senha: Joi.string().required()
    })

    // tentativa de validacao do corpo da requisicao
    try {

        const validado = await esquema.validateAsync(corpo)

        // procurando usuario no banco de dados
        usuario.findOne({ 
            email: validado.email, 
            senha: crypto.SHA256(validado.senha).toString()
        })

            // retornando valores caso bem sucedido
            .then(function(resultado) {

                if (resultado)
                    resposta.sendStatus(202)
                
                else
                    resposta.sendStatus(401)

            })

            // retornando o erro caso nao sucedido
            .catch(function(erro) {
                resposta.status(500).json({ mensagem: erro.message })
            })
    }

    // retornando erro caso seja invalido o corpo
    catch(erro) {
        resposta.status(400).json({ mensagem: erro.message })
    }

})

// exportando a rota
export default rotas