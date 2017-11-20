'use strict'

module.exports = function(sequelize, DataTypes) {
    let Usuario = sequelize.define('Usuarios', {
        id: {
            type: DataTypes.INTEGER, // varchar(6)
            allowNull: false, // permite null
            primaryKey: true,
            autoIncrement: true
        },
        nombres: {
            type: DataTypes.STRING(40),
            allowNull: false

        },
        apellidos: {
            type: DataTypes.STRING(40),
            allowNull: false

        },
        email: {
            type: DataTypes.STRING(40),
            allowNull: false

        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false

        },
        activo: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false

        }
    });
    // Usuario.associate = function(model) {
    //     // ManyToOne
    //     Usuario.belongsTo(model.TipoDocumento, {
    //         'onDelete': 'RESTRICT',
    //         foreignKey: {
    //             field: 'tipoDocumento',
    //             allowNull: false
    //         }
    //     });
    //     // manyToMany
    //     Usuario.belongsToMany(model.Rol, {
    //         as: 'roles',
    //         through: 'UsuariosRoles',
    //         foreignKey: {
    //             field: 'usuario'
    //         }
    //     });
    // }
    return Usuario;
}