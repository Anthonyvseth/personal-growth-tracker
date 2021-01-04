'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'goals',
      [
        {
          title: 'Finish P4',
          description: 'you need to finish your p4 to graduate the GA SEI course',
          rating: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('goals', null, {})
  }
}
