// import react, styled
import React from "react" 
import styled from "styled-components"

// criando o modelo
const Titulo = styled.h1` 
    color: #eb211e; 
    font-size: 42px; 
    letter-spacing: 2px; 
`

// exportando a funcao
export default function Componente() { 

    // retornando os elementos
    return <div> 
        <Titulo> Pousando em React! </Titulo>
        <p> SuperGeeks </p> 
        <img src="/foto.jpg" alt="foto pasta public"/>
    </div> 
}
