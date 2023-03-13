const express = require('express')
const { check } = require('express-validator')
const { autenticarUsuario, usuarioAutenticado } = require('../controllers/authControllers')
const auth = require('../middleware/auth')
const router = express.Router()


router.route('/')
  .post(
    [
      check('email', 'Agregar un email valido').isEmail(),
      check('password', 'El password no puede ir vacio').not().isEmpty()
    ],
    autenticarUsuario
  )
  .get(
    auth,
    usuarioAutenticado
  )

module.exports = router