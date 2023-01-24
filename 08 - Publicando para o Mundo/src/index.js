// importando o react e o react dom
import React from "react"
import { createRoot } from "react-dom/client"

// importando o componente
import Pagina from "./Pagina"

// declarando o contentor e a origem
const contentor = document.getElementById("root")
const origem = createRoot(contentor)

// renderizando o componente
origem.render( <Pagina/> )