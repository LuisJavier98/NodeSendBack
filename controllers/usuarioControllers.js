const Usuario = require("../models/Usuario")
const bcrypt = require('bcrypt')
const { validationResult } = require("express-validator")



exports.nuevoUsuario = async (req, res) => {

  const { email, password } = req.body

  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() })
  }

  let usuario = await Usuario.findOne({ email })
  if (usuario) {
    return res.status(400).json({ msg: 'El email ya esta registrado' })
  }

  usuario = new Usuario(req.body)
  const salt = await bcrypt.genSalt(10)
  usuario.password = await bcrypt.hash(password, salt)
  try {
    await usuario.save()
    res.json({ msg: 'Usuario creado correctamente' })

  } catch (error) {
    console.log(error)
  }
}