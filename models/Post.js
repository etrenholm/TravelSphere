const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

// Post = Itinerary Idea
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isURL: true
            }
        },
        post_content: {
            type: DataTypes.STRING(1234),
            allowNull: false
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
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
)

module.exports = Post;