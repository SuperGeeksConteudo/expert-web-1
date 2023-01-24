// importando o React e o ReactDOM
import React from "react" 
import { createRoot } from "react-dom/client" 

// importando o component Rotas
import Rotas from "./Rotas" 

// criando o contetor e a origem
const contentor = document.getElementById("root") 
const origem = createRoot(contentor) 

// renderizando o component
origem.render(<Rotas/>)