// importando styled componetnes
import styled from "styled-components"

// criando o modelo
const ElementoEntrada = styled.input`
    background: white;
    border: none;
    height: 42px;
    font-size: 14pt;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
` 

// exportando o componente
export default function Entrada() {

    // retornando os elementos
    return <ElementoEntrada
        type="text" 
        placeholder="Digite um novo item"
        name="item"
    />
}