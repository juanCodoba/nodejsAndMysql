'use strict'

const { TipoDocumento } = require('../../sqldb')

function findAll(req, res) {
    return TipoDocumento.findAll()
        .then(resulOk(res))
        .catch(error(res))
}

function finById(req, res) {
    return TipoDocumento.find({

            where: {
                id: req.params.id
            }

        })
        .then(entityNotFound(res))
        .then(resulOk(res))
        .catch(error(res))


}

function create(req, res) {
    return TipoDocumento.create(req.body)
        .then(resulOk(res, 201))
        .catch(error(res))

}

function update(req, res) {

    if (req.body.id) {
        Reflect.deleteProperty(req.body, 'id')
    }
    return TipoDocumento.update(req.body, {
            where: {
                id: req.params.id
            }

        })
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

function entityNotFound(res) {
    return function(entity) {
        if (!entity) {
            res.status(404).end();
            return null
        }
        return entity;
    }
}

module.exports = {
    findAll,
    finById,
    create,
    update
}