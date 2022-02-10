const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Item = require('./User');

class Location extends Model { }

Location.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
         item_id:{
            type: DataTypes.INTEGER,
            references: {
                model: Item,
                key: 'id'
            }
        }
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'location',
      }
);
module.exports = Location;