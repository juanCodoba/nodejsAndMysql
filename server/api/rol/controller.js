'use strict'

const { Rol } = require('../../sqldb')

function findAll(req, res) {
    return Rol.findAll()
        .then(resulOk(res))
        .catch(error(res))
}

function finById(req, res) {}

function create(req, res) {}

function update(req, res) {}

function resulOk() {}

function notFound(res, statusCode) {
    statusCode = statusCode || 200
        // res.statusCode(200).send({message:})
    return function(entity) {
        if (entity) {
            res.status(statusCode).json(entity)
        }
        return null;
    }
}

function error(res, statusCode) {
    statusCode = statusCode || 500
    return err => {
        console.error(`error:${err}`)
        return res.status(statusCode).send(err)

    }
}

module.exports = {
    findAll,
    finById,
    create,
    update
}