'use strict'

module.exports = function(sequelize, DataTypes) {

    var TipoDocumento = sequelize.define('TiposDocumentos', {

        id: {
            type: DataTypes.STRING(6), //varchar(6)
            allowNull: false, //permite null
            primaryKey: true,
            // autoIncrement:true
        },
        descripcion: {
            type: DataTypes.STRING(40),
            allowNull: false,

        }
    })
    TipoDocumento.associate = function(models) {
        //OneToMany
        TipoDocumento.hasMany(models.Usuario, {
            as: 'usuarios',
            foreignKey: {
                field: 'tipoDocumento',
                allowNull: false
            }
        })
    }
    return TipoDocumento;
}