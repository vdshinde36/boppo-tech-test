'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.addColumn('Employees', 'organization', { type:  Sequelize.STRING });
     
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
