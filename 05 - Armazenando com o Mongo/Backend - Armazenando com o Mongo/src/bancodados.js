// importando o mongoose
import mongoose from "mongoose"

// criando esquema para salvar os dados
const esquemaUsuario = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    nascimento: Date
})

// criando o modelo de usuario
const usuario = mongoose.model("usuario", esquemaUsuario)

// exportando o modelo de usuario
export { usuario } 