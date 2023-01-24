// importando o react e styled components
import React from "react" 
import styled from "styled-components" 

// criando o modelo
const ModeloCampo = styled.div` 
    background: #303741; 
    border-radius: 16px;
    padding: 16px; 
`

// exportando o componente
export default function Campo(props) { 

    // retornando os elementos
    return <ModeloCampo>
        { props.children }
    </ModeloCampo> 
}
