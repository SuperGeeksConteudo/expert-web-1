// importando o React, UseState, UseEffect
import React, { useState, useEffect } from "react"

// importando os components
import Navegacao from "../components/Navegacao" 
import Principal from "../components/Principal"

// importando os dados de exemplo
//import ProdutosExemplo from "../datas/ProdutosExemplo"

// importando a funcao do banco de dados
import { ObterProdutos } from "../functions/RequisicaoServidor"

// exportando a function do component
export default function Vitrine() { 

    // declarando o estado produto
    const [ produtos, definirProdutos ] = useState([])

    // funcionamento para obter produtos
    useEffect(function() { 

        ObterProdutos() 

            .then(function(resposta) { 

                if (resposta.status === 200) 
                    definirProdutos(resposta.data) 

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

        { produtos.length > 0 && 

            <Principal produtos={ produtos }/> 

        }

    </> 
}

