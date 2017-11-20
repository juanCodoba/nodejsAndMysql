'use strict'

const { Rol } = require('../../sqldb')

function findAll(req, res) {
    return Rol.findAll()
        .then(notFound(res), 404)
        .then(resulOk(res))
        .catch(error(res))
}

function findById(req, res) {
    return Rol.find({
            where: {
                id: req.params.id
            }
        })
        .then(notFound(res), 404)
        .then(resulOk(res, 201))
        .catch(error(res))
}

function create(req, res) {
    return Rol.create(req.body)
        .then(notFound(res), 404)
        .then(resulOk(res, 201))
        .catch(error(res))
}

function update(req, res) {
    if (req.body.id) {
        Reflect.deleteProperty(req.body, 'id')
    }
    return Rol.update(req.body, {
            id: req.params.id
        })
        .then(notFound(res), 404)
        .then(resulOk(res, 201))
        .catch(error(res))
}

function resulOk(res, statusCode) {
    statusCode = statusCode || 200
        // res.statusCode(200).send({message:})
    return function(entity) {
        if (entity) {
            res.status(statusCode).json(entity)
        }
        return null
    }
}

function notFound(res) {
    return function(entity) {
        if (!entity) {
            res.status(404).end()
            return null
        }
        return entity
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
    findById,
    create,
    update
}