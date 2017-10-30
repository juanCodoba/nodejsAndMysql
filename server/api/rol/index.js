'use strict'

const express = require('express')
const controller = require('./controller')
const router = express.Router()

//rutas api para TipoDocumento
router.get('/', controller.findAll)

module.exports = router;