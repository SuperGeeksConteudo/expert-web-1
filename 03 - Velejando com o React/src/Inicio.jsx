// importando o react e usestate
import React, { useState } from "react"

// importando os componentes
import Titulo from "./components/Titulo"
import Campo from "./components/Campo"
import Item from "./components/Item"
import Entrada from "./components/Entrada"

// exportando o componente
export default function Inicio() {

    // criando um estado lista
    const [ lista, mudarLista ] = useState([])

    // functionamento para adicionar item
    function Adicionar(evento) {
        const item = evento.target.item.value
        mudarLista([...lista, item])
        evento.preventDefault()
    }

    // retornando os elementos
    return <>

        <Titulo nome="Velejando com o React"/>

        <Campo>
            <form onSubmit={ Adicionar }>
                <Entrada/>
            </form>
        </Campo>

        <Campo>
            { 
                lista.map(function(item) {
                    return <Item key={ item } texto={ item }/>
                })
            }
        </Campo>

    </>
}