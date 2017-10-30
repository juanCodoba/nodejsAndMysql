'use strict'

const express = require('express')
const api = express.Router()
const TipoDocumento = require('../api/tipo-documento')

api.use('/tipos-documentos', TipoDocumento)

module.exports = api;