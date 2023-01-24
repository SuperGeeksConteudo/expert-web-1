// importando o react, react dom
import React from "react" 
import { createRoot } from "react-dom/client" 

// importando a rota
import Rotas from "./Rotas" 

// declarando o contentor e a origem
const container = document.getElementById("root") 
const root = createRoot(container) 

// renderizando a rota
root.render(<Rotas/>)