import React from "react"

import Pricipal from "../components/Principal"
import Entrar from "../components/Entrar"

export default function Inicio() {

    return <Pricipal fundo="/fundo.jpg" tamanho="480px">

        <Entrar/>

    </Pricipal>
}