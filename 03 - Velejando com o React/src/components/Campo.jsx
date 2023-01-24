// importandoo react e o styled componetnes
import React from "react"
import styled from "styled-components"

// criando o modelo
const ElementoCampo = styled.div`
    background: #fff;
    margin: 32px 0;
    padding: 16px;
`

// exportando o componente
export default function Campo(props) {

    // retornando os elementos
    return <ElementoCampo>
        { props.children }
    </ElementoCampo>
}