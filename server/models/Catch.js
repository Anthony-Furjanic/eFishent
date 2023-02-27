const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Catch extends Model {}

Catch.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    isGoodCatch: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weather: {
      type: DataTypes.STRING,
    },
   location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lure_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'catch',
  }
);

module.exports = Catch;