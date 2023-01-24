// importando o react e styled components
import React from "react" 
import styled from "styled-components" 

// criando o modelo
const ModeloConteudo = styled.div` 
    background: #3b424c; 
    border-radius: 20px;
    margin-bottom: 16px; 
    padding: 16px; 
`

const ConteudoTopo = styled.div` 
    display: flex; 
    gap: 16px;
`

const ConteudoFoto = styled.img` 
    border-radius: 100%;
    height: 96px; 
    width: 96px;
`

const ConteudoNome = styled.div` 
    align-self: center; 
    color: #2ca8f2;
    font-size: 20pt;
`

const ConteudoDescricao = styled.div` 
    margin-top: 16px; 
    text-align: justify;
`

// exportando o componente
export default function Conteudo(props) { 

    // retornando os elementos
    return <ModeloConteudo> 

        <ConteudoTopo> 
            <ConteudoFoto src={ props.foto } alt="foto"/> 
            <ConteudoNome> { props.nome } </ConteudoNome> 
        </ConteudoTopo> 

        <ConteudoDescricao> { props.descricao } </ConteudoDescricao> 

    </ModeloConteudo> 
}
