const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ListItem extends Model { }

ListItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        item_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        trip_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'trip',
                key: 'id'
            }
        },
        member_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'member',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'listitem'
    }
);

module.exports = ListItem;