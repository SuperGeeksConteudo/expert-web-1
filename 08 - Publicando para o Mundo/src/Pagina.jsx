// importando o react
import React from "react"

// exportando o componente paginas
export default function Pagina() {

    // retornando os elementos
    return <main>

        <img src="./foto.svg" alt="foto" width="128" />

        <div> Fulano | 99 anos | Desenvolvedor Web </div>

        <div> 
            Perfil: Olá eu sou o Fulano e sou Desenvolvedor Web. Adoro programar em React e em outras diversas tecnologias novas.
        </div>

        <div> 
            Experiências: Já trabalhei com XXXXXX, desenvolvendo projetos como XXXXXX e passei 99 anos fazendo curso na SuperGeeks. 
        </div>

        <div> 
            Competências: HTML, CSS, JavaScript e React. 
        </div>

        <div>
            <a href="mailto:fulano@email.com"> Email </a>
            <a href="tel:+5511988887777"> Celular </a>
            <a href="https://github.com/fulano"> Github </a>
        </div>

    </main>
}
