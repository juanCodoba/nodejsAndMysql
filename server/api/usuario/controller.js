'use strict'

const { Usuario } = require('../../sqldb')

function findAll(req, res) {
    return Usuario.findAll()
        .then(notFound(res))
        .then(resulOk(res))
        .catch(error(res))
}

function findById(req, res) {
    return Usuario.find({
            where: {
                id: req.params.id
            }
        })
        .then(notFound(res))
        .then(resulOk(res, 201))
        .catch(error(res));
}

function findEmail(req, res) {
    return Usuario.find({
            where: {
                email: req.params.email
            }
        })
        .then(notFound(res))
        .then(resulOk(res, 201))
        .catch(error(res))
}


function create(req, res) {



    if (validarEmail == null) {
        return console.log('error no puedes registrarte con el mismo correo')
            // .catch(error(res))
    } else {
        return Usuario.create(req.body)
            .then(notFound(res))
            .then(resulOk(res, 201))


    }
    // return Usuario.create(req.body)
    //     .then(notFound(res))
    //     .then(resulOk(res, 201))
    //     .catch(error(res))

}

function update(req, res) {
    if (req.body.id) {
        Reflect.deleteProperty(req.body, 'id')
    }
    return Usuario.update(req.body, {
            id: req.params.id
        })
        .then(notFound(res))
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


function validarEmail(req, res, email) {
    return Usuario.findEmail(email) == null;
}



module.exports = {
    findAll,
    findById,
    findEmail,
    create,
    update
}