// importando o React e o React Router DOM
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"  

// importando as paginas
import Vitrine from "./pages/Vitrine" 
import Produto from "./pages/Produto" 
import Promocao from "./pages/Promocao" 
import Carrinho from "./pages/Carrinho" 
import Catalogar from "./pages/Catalogar" 

// exportando a function do component
export default function Rotas() { 

    // definindo as rotas
    return <BrowserRouter> 
        <Routes> 

            <Route index path="/" element={ <Vitrine/> }/>

            <Route path="/produto/:codigo" element={ <Produto/> }/>

            <Route path="/promocao" element={ <Promocao/> }/>

            <Route path="/carrinho" element={ <Carrinho/> }/>

            <Route path="/catalogar" element={ <Catalogar/> }/>

        </Routes> 
    </BrowserRouter> 
}
