// exportando a function
export default function SalvarCarrinho(codigo) {

    // obtendo itens do carrinho
    const resultado = localStorage.getItem("carrinho")

    // transformando em lista
    const lista = JSON.parse(resultado || "[]")

    // adicionando codigo
    lista.push(codigo)

    // transformando em carrinho
    const carrinho = JSON.stringify(lista) 

    // salvando novo carrinho
    localStorage.setItem("carrinho", carrinho)

}
