// importando o react, usestate, useeffect e axios
import React, { useState, useEffect } from "react"
import axios from "axios"

// importando os componentes
import Titulo from "./components/Titulo"
import Campo from "./components/Campo"
import Conteudo from "./components/Conteudo"

// exportando o componente
export default function Inicio() {

    // declarando estado codigo e conteudos
    const [ codigos, definirCodigos ] = useState([])
    const [ conteudos, definirConteudos ] = useState({})

    // functionamento para obter do banco de dados
    useEffect(function() {

        axios.get("http://localhost:4000/")

            .then(function(resposta) {
                const dados = resposta.data
                const lista = Object.keys(dados)
                definirCodigos(lista)
                definirConteudos(dados)
            })

            .catch(function(erro) {
                console.log(erro)
            })
    })

    // retornando os elementos 
    return <>

        <Titulo 
            nome="Conectando o React" 
            fundo="/titulo.gif"
        />

        <Campo>
            {
                codigos.map(function(codigo) {
                    return <Conteudo 
                        key={ codigo }
                        codigo={ codigo }
                        capa={ conteudos[codigo].capa }
                        titulo={ conteudos[codigo].titulo }
                        genero={ conteudos[codigo].genero }
                        ano={ conteudos[codigo].ano }
                        autor={ conteudos[codigo].autor }
                    />
                })
            }
        </Campo>

    </>
}