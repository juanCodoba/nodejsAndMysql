module.exports = {
    port: process.env.PORT || 3000,
    database: {
        uri: process.env.SEQUELIZE_URI || 'mysql://root:angel@localhost:3306/node-adsi',
        options: {
            host: process.env.host || 'localost',
            dialect: 'mysql',
            timezone: 'America/bogota',
            define: {
                timestamps: false
            }
        }
    },
    token_secret: process.env.token_secret || 'node-adsi'
}