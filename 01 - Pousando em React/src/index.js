// importando o react e o react dom
import React from "react" 
import { createRoot } from "react-dom/client" 

// importando o componente
import Componente from "./Componente"

// declarando o contentor e origem
const contentor = document.getElementById("root") 
const origem = createRoot(contentor) 

//const botao = <button> Clica em mim! </button>

//const nome = "Pedro" 
//const titulo = <h1> Meu nome é { nome }! </h1>

// renderizando o componente
origem.render(<Componente/>)