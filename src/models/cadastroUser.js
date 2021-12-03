const mongoose = require('../database');


const cadastroUserSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  apelido: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  telefone: {
    type: Number,
    require: true,
    unique: true,

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



const User = mongoose.model('cadastroUser', cadastroUserSchema);

module.exports = User;