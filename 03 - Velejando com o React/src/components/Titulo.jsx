// importandoo react e o styled componetnes
import React from "react"
import styled from "styled-components"

// criando o modelo
const ElementoTitulo = styled.div`
    background: linear-gradient(45deg, #cb356b, #bd3f32);
    color: white;
    padding: 32px;
`

const TituloNome = styled.div`
    font-size: 32pt;
    margin-top: 96px;
`

const TituloData = styled.div`
    font-size: 16pt;
    margin-top: 8px;
`

// exportando o componente
export default function Titulo(props) {

    // declarando a data e formatnado
    const dataHoje = new Date()
    const dataEstilo = { weekday: "long", day: "numeric", month: "long" }
    const dataFormatada = dataHoje.toLocaleDateString("pt-br", dataEstilo)

    // retornando os elementos
    return <ElementoTitulo>
        <TituloNome> { props.nome } </TituloNome>
        <TituloData> { dataFormatada } </TituloData>
    </ElementoTitulo>
}