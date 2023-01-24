import React, { useEffect, useState } from "react"

import Navegacao from "../components/Navegacao"
import Destaque from "../components/Destaque"
import Sessao from "../components/Sessao"

import ObterConteudos from "../functions/ObterConteudos"
import ObterGeneros from "../functions/ObterGeneros"

export default function Explorar() {

    const [ conteudos, definirConteudos ] = useState([])
    const [ generos, definirGeneros ] = useState([])

    useEffect(function() {

        ObterConteudos()

            .then(function(resposta) {

                if (resposta.status == 200)
                    definirConteudos(resposta.data)
                
                else
                    console.log(resposta)
            })

            .catch(function(erro) {
                console.log(erro)
            })

        ObterGeneros()

            .then(function(resposta) {

                if (resposta.status == 200)
                    definirGeneros(resposta.data)
                
                else
                    console.log(resposta)

            })

            .catch(function(erro) {
                console.log(erro)
            })

    }, [])

    return <>
    
        <Destaque fundo="/fundo.jpg">
            <Navegacao/>
        </Destaque>
    
        { generos.length > 0 &&

            generos.map(function(genero, indice) {

                return <Sessao 
                    key={ indice }
                    genero={ genero }
                    conteudos={ conteudos }/>

            })

        }

    </>
}