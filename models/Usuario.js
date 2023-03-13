const { default: mongoose } = require("mongoose");

const usuariosSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  nombre: {
    type: String,
    require: true,
    trim: true
  },
  password: {
    type: String,
    require: true,
    trim: true
  }
})

module.exports = mongoose.model('Usuarios', usuariosSchema)