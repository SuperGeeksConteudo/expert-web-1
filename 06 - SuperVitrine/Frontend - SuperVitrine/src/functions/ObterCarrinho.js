// exportando a function
export default function ObterCarrinho() {

    // obtendo itens do carrinho
    const resultado = localStorage.getItem("carrinho")

    // transformando em lista
    const lista = JSON.parse(resultado || "[]") 

    // retornando a lista do carrinho
    return lista

}
