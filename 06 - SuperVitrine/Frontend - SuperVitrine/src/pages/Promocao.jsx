// importando o React, UseState, UseEffect
import React, { useState, useEffect } from "react"

// importando os components
import Navegacao from "../components/Navegacao"
import Exibidor from "../components/Exibidor"

// importando os dados de exemplo
//import ProdutosExemplo from "../datas/ProdutosExemplo" 

// importando a funcao do banco de dados
import { ObterPromocao } from "../functions/RequisicaoServidor"

// exportando a function do component
export default function Promocao() { 

    // declarando o estado promocao
    const [ promocao, definirPromocao ] = useState([])

    // funcionamento para obter produtos da promocao
    useEffect(function() { 

        ObterPromocao() 
    
            .then(function(resposta) { 
    
                if (resposta.status === 200) 
                    definirPromocao(resposta.data) 
    
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

        { promocao.length > 0 && 

            promocao.map(function(produto, indice) {

                if (produto.promocao == true) 

                    return <Exibidor key={ indice } produto={ produto }/> 
            }) 
            
        }
        
    </> 
}
