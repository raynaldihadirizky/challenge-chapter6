'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usergame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usergame.init({
    username: DataTypes.TEXT,
    password: DataTypes.STRING,
    approved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'usergame',
  });
  return usergame;
};