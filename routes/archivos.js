const express = require('express')

const { subirArchivo, eliminarArchivo, descargar } = require('../controllers/archivosControllers')
const auth = require('../middleware/auth')
const router = express.Router()


router.post('/', auth,
  subirArchivo)

router.get('/:archivo',
  descargar,
  eliminarArchivo)


module.exports = router