'use strit'

const app = require('./server/app')
const { port } = require('./server/config')
const sqldb = require('./server/sqldb')

sqldb.sequelize.authenticate()
    .then(() => resulOk())
    .catch((err) => error(err))

function resulOk() {
    console.log('funcionano ok')
    listen()
}

function listen() {
    app.listen(port, () => {
        console.log(`app funcionando correctamente en el puerto:${port} `)
    })
}

function error(err) {
    console.error(`error:${err}`)
}