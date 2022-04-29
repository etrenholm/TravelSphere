const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Group extends Model {}

Group.init(
    {
        // id: {
        //     type: DataTypes.UUID,
        //     allowNull: false,
        //     primaryKey: true,
        //     defaultValue: DataTypes.UUIDV4
        // },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        end_date: {
            type: DataTypes.STRING,
            allowNull: false
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'group'
    }
);

module.exports = Group;