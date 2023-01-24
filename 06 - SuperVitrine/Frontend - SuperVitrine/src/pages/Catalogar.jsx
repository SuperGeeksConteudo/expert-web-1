// importando o React, UseState
import React, { useState } from "react"

// importando os components
import Formulario from "../components/Formulario"

// importando a estrutura de produtos
import ProdutoInicial from "../datas/ProdutoInicial"

// importando a funcao do banco de dados
import { CatalogarProduto } from "../functions/RequisicaoServidor"

// exportando a function do component
export default function Catalogar() {

    // declarando o estado produto
    const [ produto, definirProduto ] = useState(ProdutoInicial)

    // functionamento para enviar o form ao banco de dados
    function Catalogar(evento) { 
        evento.preventDefault() 
        CatalogarProduto(produto) 
        definirProduto(ProdutoInicial) 
    }    

    // functionamento para alterar estado de texto
    function MudarTexto(evento) { 
        const valor = evento.target.value 
        const campo = evento.target.name 
        definirProduto({ ...produto, [campo]: valor }) 
    }

    // functionamento para alterar estado da promo
    function MudarPromo(evento) { 
        const valor = evento.target.checked 
        definirProduto({ ...produto, "promocao": valor }) 
    }
    
    // functionamento para alterar estado de imagem
    function MudarImagem(evento) { 
        const indice = evento.target.id 
        const imagens = produto.imagens 
        imagens[indice] = evento.target.value 
        definirProduto({ ...produto, "imagens": imagens }) 
    }    

    // retornando os elementos do componente
    return <Formulario onSubmit={ Catalogar }>

        <input 
            value={ produto.codigo }
            onChange={ MudarTexto } 
            type="text" name="codigo" 
            placeholder="Código do produto" required />

        <input 
            value={ produto.marca }
            onChange={ MudarTexto } 
            type="text" name="marca" 
            placeholder="Marca do produto" required />

        <input 
            value={ produto.modelo }
            onChange={ MudarTexto } 
            type="text" name="modelo" 
            placeholder="Modelo do produto" required />

        <input 
            value={ produto.preco }
            onChange={ MudarTexto } 
            type="number" name="preco" 
            placeholder="R$ 1.000,00" required />

        <input 
            value={ produto.descricao }
            onChange={ MudarTexto } 
            type="text" name="descricao" 
            placeholder="Descrição do produto" required />

        <input 
            value={ produto.imagens[0] }
            onChange={ MudarImagem } 
            type="text" name="imagens" id="0"
            placeholder="Imagem 1 do produto" required />

        <input 
            value={ produto.imagens[1] }
            onChange={ MudarImagem } 
            type="text" name="imagens" id="1"
            placeholder="Imagem 2 do produto" required />

        <input 
            value={ produto.imagens[2] }
            onChange={ MudarImagem } 
            type="text" name="imagens" id="2"
            placeholder="Imagem 3 do produto" required />

        <div> 

            <label htmlFor="promocao"> Promoção? </label> 

            <input 
                checked={ produto.promocao } 
                onChange={ MudarPromo } 
                type="checkbox" name="promocao" 
                id="promocao" /> 

        </div>

        <input type="submit" value="Catalogar" />

    </Formulario>

}
