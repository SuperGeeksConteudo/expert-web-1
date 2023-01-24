// importando o react
import React from "react" 

// importando os componentes
import Titulo from "../components/Titulo" 
import Campo from "../components/Campo" 
import Conteudo from "../components/Conteudo" 

// exportando o componente
export default function Inicio() { 

    // retornando os elementos
    return <> 
        <Titulo nome="Mergulhando no React"/>

        <Campo>

            <Conteudo 
                foto="/pessoa1.jpg" 
                nome="@pessoa1" 
                descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
            />

            <Conteudo 
                foto="/pessoa2.jpg" 
                nome="@pessoa2" 
                descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
            />

        </Campo>
    </> 
}
