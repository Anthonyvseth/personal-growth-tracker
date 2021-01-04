'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Affirmation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Affirmation.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Affirmation',
    tableName: 'affirmations'
  });
  return affirmation;
};