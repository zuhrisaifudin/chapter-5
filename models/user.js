'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    log_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    winStatus: DataTypes.STRING,
    score: DataTypes.INTEGER,
    last_logi: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};