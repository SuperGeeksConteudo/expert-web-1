// importando o react e styled components
import React from "react"
import styled from "styled-components"

// criando o modelo
const CampoElemento = styled.div`
    background: white;
    padding: 32px;
    margin: 32px 0;
`

const CampoInterno = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
`

// exportando o componente
export default function Campo(props) {

    // retornando os elementos
    return <CampoElemento>
        <CampoInterno>

            { props.children }

        </CampoInterno>
    </CampoElemento>
}