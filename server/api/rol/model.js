'use strict'

module.exports = function(sequelize, DataTypes) {

    let Rol = sequelize.define('Roles', {

        id: {
            type: DataTypes.STRING(10), //varchar(6)
            allowNull: false, //permite null
            primaryKey: true,
            // autoIncrement:true
        },
        descripcion: {
            type: DataTypes.STRING(40),
            allowNull: false,

        }
    })
    Rol.associate = function(model) {
        Rol.belongsToMany(model.Usuario, {
            as: 'usuarios',
            through: 'UsuariosRoles',
            foreignKey: {
                field: 'rol'
            }
        })
    }
    return Rol;
}