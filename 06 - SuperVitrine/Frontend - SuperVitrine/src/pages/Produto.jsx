// importando o React, UseState, UseEffect e UseParams
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// importando os components
import Navegacao from "../components/Navegacao"
import Exibidor from "../components/Exibidor"

// importando os dados de exemplo 
//import ProdutosExemplo from "../datas/ProdutosExemplo"

// importando a funcao do banco de dados
import { ObterProdutoCodigo } from "../functions/RequisicaoServidor"

// exportando a function do component
export default function Produto() {

    // obtendo o codigo do parametro de URL
    const { codigo } = useParams()

    // declarando o estado produto
    const [ produto, definirProduto ] = useState({})

    // funcionamento para obter produto pelo codigo
    useEffect(function() { 

        ObterProdutoCodigo(codigo) 
    
            .then(function(resposta) { 

                if (resposta.status === 200) 
                    definirProduto(resposta.data)
     
            }) 
    
            .catch(function(erro) { 
                console.log(erro) 
            })
    
    }, [])    

    // retornando os elementos do componente
    return <> 

        <Navegacao titulo="VITRINE"> 
            <a href="/"> Início </a> 
            <a href="/promocao"> Promoção </a> 
            <a href="/carrinho"> Carrinho </a> 
        </Navegacao> 

        <Exibidor produto={ produto }/>

    </> 
}
