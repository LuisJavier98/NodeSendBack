const Usuario = require("../models/Usuario")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const { validationResult } = require("express-validator")


exports.autenticarUsuario = async (req, res, next) => {


  const { email, password } = req.body

  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() })
  }

  const usuario = await Usuario.findOne({ email })
  if (!usuario) {
    res.status(401).json({ msg: 'El usuario no existe' })
    return next()
  }

  if (bcrypt.compareSync(password, usuario.password)) {
    const token = jwt.sign({
      id: usuario._id,
      nombre: usuario.nombre
    }, process.env.SECRETA, {
      expiresIn: '8h'
    })
    res.json({ token })

  } else {
    res.status(401).json({ msg: 'Password incorrecto' })
    return next()
  }


}

exports.usuarioAutenticado = async (req, res) => {
  try {
    res.json({ usuario: req.usuario })
  } catch (error) {
    res.status(400).json({ msg: error.message })

  }
}