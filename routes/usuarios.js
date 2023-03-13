const express = require('express')
const { check } = require('express-validator')
const { nuevoUsuario } = require('../controllers/usuarioControllers')
const router = express.Router()



router.post('/',
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Agrega un email valido').isEmail(),
    check('password', 'El password debe ser de al menos 6 caracteres').isLength({ min: 6 }),
  ],
  nuevoUsuario
)

module.exports = router