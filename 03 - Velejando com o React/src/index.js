// importando o react e o react dom
import React from "react"
import { createRoot } from "react-dom/client"

// importnando o compoennte inicio
import Inicio from "./Inicio"

// declarando o contentor e origem
const container = document.getElementById("root")
const root = createRoot(container)

// renderizando o componente
root.render(<Inicio/>)