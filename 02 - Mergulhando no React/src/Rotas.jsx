// importando o react, react router dom
import React from "react" 
import { BrowserRouter, Routes, Route } from "react-router-dom" 

// importando as paginas
import Inicio from "./pages/Inicio" 
import Postagem from "./pages/Postagem" 

// exportando o componente
export default function Rotas() { 

    // retornando os elementos
    return <BrowserRouter> 
        <Routes> 

            <Route index path="/" element={ <Inicio/> }/> 

            <Route path="/postagem/:nome/:descricao" element={ <Postagem/> }/>

        </Routes> 
    </BrowserRouter> 
}
