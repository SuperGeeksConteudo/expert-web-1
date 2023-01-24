// importando o React, UseState, UseEffect 
import React, { useState, useEffect } from "react"

// importando os components
import Navegacao from "../components/Navegacao"
import Janela from "../components/Janela"

// importando os LocalStorage
import ObterCarrinho from "../functions/ObterCarrinho"

// importando os dados de exemplo 
//import ProdutosExemplo from "../datas/ProdutosExemplo" 

// importando a funcao do banco de dados
import { ObterProdutos } from "../functions/RequisicaoServidor"

// exportando a function do component
export default function Carrinho() {

    // declarando o estado produtos, carrinho, preco
    const [ produtos, definirProdutos ] = useState([])
    const [ carrinho, definirCarrinho ] = useState([])
    const [ preco, definirPreco ] = useState(0)

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

    // funcionamento para obter carrinho
    useEffect(function() { 

        const resultado = ObterCarrinho() 
    
        definirCarrinho(resultado)
    
    }, [ produtos ])

    // funcionamento para obter o preco do carrinho
    useEffect(function() { 

        var total = 0 
    
        carrinho.map(function(codigo) { 
            for (const produto of produtos) 
    
                if (produto.codigo == codigo) 
                    total += parseInt(produto.preco) 
    
        }) 
    
        definirPreco(total)
    
    }, [ produtos, carrinho ])
 
    // retornando os elementos do componente
    return <>

        <Navegacao titulo="VITRINE"> 
            <a href="/"> Início </a> 
            <a href="/promocao"> Promoção </a> 
            <a href="/carrinho"> Carrinho </a> 
        </Navegacao> 

        <Janela> 

            <table width="100%"> 
                <tbody>

                    { produtos.length > 0 &&

                        carrinho.map(function(codigo, indice) { 

                            for (const produto of produtos) { 
                        
                                if (produto.codigo == codigo) 

                                    return <tr key={ indice }> 
                                
                                        <td> { produto.codigo } </td> 
                                        <td> { produto.modelo } </td>
                                        <td> R$ { produto.preco }.00 </td> 
                                
                                    </tr>
                            
                            } 
                        
                        })   

                    }

                </tbody>
            </table>

            <h1> Total R$ { preco },00 </h1>

        </Janela>

    </>
}
