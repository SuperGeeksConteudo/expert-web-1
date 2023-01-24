// importando o Axios
import axios from "axios"

// catalogando o produto no banco de dados
function CatalogarProduto(produto) {

    return axios({
        method: "POST", 
        url: "http://localhost:4000/catalogar", 
        data: { 
            codigo: produto.codigo, 
            marca: produto.marca, 
            modelo: produto.modelo, 
            preco: produto.preco, 
            descricao: produto.descricao, 
            imagens: produto.imagens, 
            promocao: produto.promocao 
        }
    })

}

// obtendo todos os produtos do banco de dados
function ObterProdutos() {

    return axios({
        method: "GET", 
        url: "http://localhost:4000/produtos"
    })

}

// obtendo o produto pelo codigo no banco de dados
function ObterProdutoCodigo(codigo) {

    return axios({
        method: "GET", 
        url: `http://localhost:4000/produto/${codigo}`
    })

}

// obtendo os produtos com promocao no banco de dados
function ObterPromocao() {

    return axios({
        method: "GET", 
        url: "http://localhost:4000/promocao"
    })

}

// exportando as funcoes
export {
    CatalogarProduto,
    ObterProdutos,
    ObterProdutoCodigo,
    ObterPromocao
}


