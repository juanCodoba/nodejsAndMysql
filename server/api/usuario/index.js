'use strict'

const express = require('express')
const controller = require('./controller')
const router = express.Router()

//rutas api para Usuarios
router.get('/', controller.findAll)
router.post('/', controller.create)
router.get('/:id', controller.findById)
router.get('/email/:email', controller.findEmail)
router.put('/:id', controller.update)

module.exports = router