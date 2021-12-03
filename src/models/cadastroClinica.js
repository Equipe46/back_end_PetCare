const mongoose = require('../database');


const cadastroClinicaSchema = new mongoose.Schema({
  razaoSocial: {
    type: String,
    require: true,
    uppercase: true,
    unique: true,
  },
  cnpj: {
    type: Number,
    require: true,
    unique: true,
  },
  nomeClinica: {
    type: String,
    require: true,
  },
  endereco: {
    type: String,
    require: true,
  },
  especialidade: {
    type: String,
    require: true,
  },
  telefone: {
    type: Number,
    require: true,
    unique: true,

  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  senha: {
    type: String,
    require: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});



const UserClinica = mongoose.model('cadastroClinica', cadastroClinicaSchema);

module.exports = UserClinica;