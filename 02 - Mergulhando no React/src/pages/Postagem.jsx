// importando o react e useparams
import React from "react" 
import { useParams } from "react-router-dom"

// importando os componentes
import Titulo from "../components/Titulo" 
import Campo from "../components/Campo" 
import Conteudo from "../components/Conteudo" 

// exportando o componente
export default function Postagem() { 

    // pegando os parametros do endereco
    const { nome, descricao } = useParams() 

    // retornando os elementos
    return <> 
        <Titulo nome="Mergulhando no React"/>

        <Campo>

            <Conteudo 
                foto="/pessoa3.jpg" 
                nome={ "@" + nome } 
                descricao={ descricao } 
            />

        </Campo>
    </> 
}
