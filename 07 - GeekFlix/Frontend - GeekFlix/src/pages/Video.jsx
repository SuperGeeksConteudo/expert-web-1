import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Pricipal from "../components/Principal"
import Reprodutor from "../components/Reprodutor"

import ObterUnicoConteudo from "../functions/ObterUnicoConteudo"

export default function Video() {

    const { codigo } = useParams()
    const [ conteudo, definirConteudo ] = useState({})

    useEffect(function() {

        ObterUnicoConteudo(codigo)

            .then(function(resposta) {

                if (resposta.status == 200)
                    definirConteudo(resposta.data)
                
                else
                    console.log(resposta)

            })

            .catch(function(erro) {
                console.log(erro)
            })

    }, [])

    return <>
    
        { conteudo &&

            <Pricipal fundo={ conteudo.capa } tamanho="700px"> 

                <Reprodutor conteudo={ conteudo } />

            </Pricipal>

        }
    
    </>
}