import React from "react"
import styled from "styled-components"

const Modelo = styled.div`
    background-image: url(${ props => props.fundo });
    background-size: cover;
    height: 100vh;
`

const Barra = styled.div`
    background: linear-gradient(black, transparent);
    padding: 32px;
`

const BarraImagem = styled.img`
    display: flex;
    margin: 0 auto;
    height: 48px;
`

const Mensagem = styled.div`
    margin: 0 auto;
    padding: 64px 0;
    width: ${ props => props.tamanho };
    text-align: center;
`

export default function Pricipal(props) {

    return <Modelo fundo={ props.fundo }>

        <Barra>

            <BarraImagem src="/logo.png" alt="logo"/>

        </Barra>

        <Mensagem tamanho={ props.tamanho }>

            { props.children }

        </Mensagem>

    </Modelo>
}