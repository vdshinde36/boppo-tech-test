'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.removeColumn('Employees','id');
    await queryInterface.changeColumn('Employees','employeeid',{
      type:Sequelize.STRING,
      primaryKey:true
    });
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
