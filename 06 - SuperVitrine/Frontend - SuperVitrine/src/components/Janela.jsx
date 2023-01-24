// importando o React e Styled Components
import React from "react" 
import styled from "styled-components"

// criando o modelo
const Modelo = styled.div` 
    background: #fff; 
    margin: 32px 0; 
    overflow: hidden; 
    padding: 32px; 
`

// exportando a function do component
export default function Janela(props) { 

    // retornando os elementos do componente
    return <Modelo>  

        { props.children } 

    </Modelo>

}
