const express = require('express')
const { check } = require('express-validator')
const { eliminarArchivo } = require('../controllers/archivosControllers')
const { nuevoEnlace, obtenerEnlace, todosEnlaces, tienePassword, verificarPassword } = require('../controllers/enlaceControllers')
const auth = require('../middleware/auth')
const router = express.Router()

router.post('/',
  [check('nombre', 'Sube un archivo').not().isEmpty(),
  check('nombre_original', 'Sube un archivo').not().isEmpty()
  ],
  auth,
  nuevoEnlace
)
router.get('/',
  todosEnlaces
)

router.get('/:url',
  tienePassword,
  obtenerEnlace

)

router.post('/:url', verificarPassword, obtenerEnlace)

module.exports = router