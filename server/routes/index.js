'use strict'

const express = require('express')
const api = express.Router()
const TipoDocumento = require('../api/tipo-documento')
const Rol = require('../api/rol')
const Usuario = require('../api/usuario')

api.use('/tipos-documentos', TipoDocumento)
api.use('/rol', Rol)
api.use('/usuarios', Usuario)


module.exports = api;