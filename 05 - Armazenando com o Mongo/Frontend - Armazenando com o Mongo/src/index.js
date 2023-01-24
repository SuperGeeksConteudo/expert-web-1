// importando o React e o ReactDOM
import React from "react" 
import { createRoot } from "react-dom/client" 

// importando o component Inicio
import Inicio from "./Inicio" 

// criando o contetor e a origem
const contentor = document.getElementById("root") 
const origem = createRoot(contentor) 

// renderizando o component
origem.render(<Inicio/>)