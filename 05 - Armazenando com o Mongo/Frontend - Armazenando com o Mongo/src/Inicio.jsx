// importando o React, UseState, Axios e Styled Components
import React, { useState } from "react" 
import axios from "axios"
import styled from "styled-components"

// criando o modelo Formulario
const ModeloFormulario = styled.form`
    background: white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;
    width: 420px;
`

// exportando a function do component
export default function Inicio() { 

    // criando estados
    const dadosInicio = { usuario: "", email: "", senha: "", nascimento: "" }
    const [ dados, definirDados ] = useState(dadosInicio)

     // criando function para salvar no servidor
    async function Adicionar(evento) {
        evento.preventDefault()
        await axios.post("http://localhost:4000/", dados)
        definirDados(dadosInicio)
    }

    // criando function para atualizar estados
    function Mudar(evento) {
        const valor = evento.target.value
        const campo = evento.target.name
        definirDados({ ...dados, [campo]: valor })
    }

    // retornando os elementos visuais
    return <ModeloFormulario onSubmit={ Adicionar }>
        
        <input 
            value={ dados.usuario } 
            onChange={ Mudar }
            type="text" name="usuario" 
            placeholder="Nome" required/>

        <input 
            value={ dados.email } 
            onChange={ Mudar }
            type="email" name="email" 
            placeholder="Email@mail.com" required/>

        <input 
            value={ dados.senha } 
            onChange={ Mudar }
            type="password" name="senha" 
            placeholder="******" required/>

        <input 
            value={ dados.nascimento } 
            onChange={ Mudar }
            type="date" name="nascimento" 
            required/>

        <input type="submit" value="Cadastrar"/>

    </ModeloFormulario>
}
