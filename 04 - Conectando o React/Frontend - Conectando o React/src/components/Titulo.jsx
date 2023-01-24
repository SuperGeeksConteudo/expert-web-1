// importando o react e styled components
import React from "react"
import styled from "styled-components"

// criando o modelo
const ElementoTitulo = styled.div`
    background: linear-gradient(50deg, #333 2%, #dd1818);
    padding: 32px;
`

const TituloNome = styled.div`
    color: white;
    font-size: 32pt;
    margin-top: 128px;
`

// exportando o componente
export default function Titulo(props) {

    // retornando os elementos
    return <ElementoTitulo fundo={ props.fundo }>
        <TituloNome> { props.nome } </TituloNome>
    </ElementoTitulo>
}