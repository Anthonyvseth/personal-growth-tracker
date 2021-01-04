'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'accomplishments',
      [
        {
          title: 'Quit my last job',
          description: 'I quit my last job that made me very unhappy',
          rating: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('accomplishments', null, {})
  }
}
