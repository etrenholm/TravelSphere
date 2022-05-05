const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const { v4: uuidv4 } = require('uuid');

class Trip extends Model {}

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,   
            primaryKey: true
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
        modelName: 'trip'
    }
);

module.exports = Trip;