import React from "react"

import Pricipal from "../components/Principal"
import Formulario from "../components/Formulario"

export default function Painel() {

    return <Pricipal fundo="/fundo.jpg" tamanho="480px">

        <Formulario/>

    </Pricipal>
}