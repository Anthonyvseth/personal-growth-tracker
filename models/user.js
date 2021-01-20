'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(models.Affirmation, {
        foreignKey: 'user_id',
        as: 'affirmations',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
        User.hasMany(models.Goal, {
          foreignKey: 'user_id',
          as: 'goal',
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }),
          User.hasMany(models.Accomplishment, {
          foreignKey: 'user_id',
          as: 'accomplishment',
          onDelete: 'cascade',
          onUpdate: 'cascade'
          })
  }
}
  User.init({
    userName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};