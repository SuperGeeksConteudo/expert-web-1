// importando o mongoose
import mongoose from "mongoose"

// criando um esquema de dados
const esquema = new mongoose.Schema({
    capa: String,
    trilha: String,
    titulo: String,
    descricao: String,
    genero: String,
    ano: Number,
    duracao: Number,
    faixa: Number
}, 
{ collection: "Conteudos" })

// criando o modelo
const conteudo = mongoose.model("conteudo", esquema)

// exportando o modelo
export { conteudo }