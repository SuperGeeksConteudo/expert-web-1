// importando o react e styled components
import React from "react" 
import styled from "styled-components" 

// criando o modelo
const ModeloTitulo = styled.div` 
    color: #2da9f3; 
    font-size: 32pt; 
    padding: 32px 0; 
    text-align: center; 
`

// exportando o componente
export default function Titulo(props) { 

    // retornando os elementos
    return <ModeloTitulo>
        { props.nome }
    </ModeloTitulo> 
}
