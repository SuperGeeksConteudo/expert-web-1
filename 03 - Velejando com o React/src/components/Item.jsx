// importandoo react e o styled componetnes
import React, { useState } from "react"
import styled from "styled-components"

// criando o modelo
const ElementoItem = styled.div`
    background: ${
        props => props.estado ? "white" : "#eee"
    };
    margin-bottom: 16px;
    padding: 16px;
    text-align: center;
    text-decoration: ${ 
        props => props.estado ? "line-through" : "none" 
    }
`

// exportando o componente
export default function Item(props) {

    // criando o estado feito
    const [ feito, mudarFeito ] = useState(false)

    // funcionamento para alterar o estado
    function Alternar() {
        mudarFeito(!feito)
    }

    // retornando os elementos
    return <ElementoItem onClick={ Alternar } estado={ feito }>
        { props.texto }
    </ElementoItem>
}