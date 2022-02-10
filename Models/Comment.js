const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Item = require('./Item');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        },
        item_id: {
            type: DataTypes.INTEGER,
            references: {
                Model: Item,
                key: 'id'
            }
        }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment',
    }

);

module.exports = Comment;