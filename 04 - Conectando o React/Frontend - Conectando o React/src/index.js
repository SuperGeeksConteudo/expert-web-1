// importando o react e react dom
import React from "react"
import { createRoot } from "react-dom/client"

// importando o componente
import Inicio from "./Inicio"

// declarando o contentor e origem
const container = document.getElementById("root")
const root = createRoot(container)

// renderizar o componente
root.render(<Inicio/>)