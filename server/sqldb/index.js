'use strict'

const Sequelize = require('sequelize')
const { database } = require('../config')

var db = {
    Sequelize,
    sequelize: new Sequelize(database.uri,
        database.options)
}

// models

db.Rol = db.sequelize.import('../api/rol/model')

db.Usuario = db.sequelize.import('../api/usuario/model')

db.TipoDocumento = db.sequelize.import('../api/tipo-documento/model')

// end models

Object.keys(db).forEach(modelName => {
    if ('associate ' in db[modelName]) {
        db[modelName].associate(db)
    }
})
module.exports = db