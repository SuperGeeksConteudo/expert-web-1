// importando o mongoose
import mongoose from "mongoose"

// criando o esquema
const esquema = new mongoose.Schema({
    email: String,
    senha: String
}, 
{ collection: "Usuarios" })

// criando o modelo
const usuario = mongoose.model("usuario", esquema)

// exportando o modelo
export { usuario }