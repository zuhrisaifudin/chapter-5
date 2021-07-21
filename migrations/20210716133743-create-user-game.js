'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_games', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          username: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true
          },
          email: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true
          },
          password: {
            allowNull: false,
            type: Sequelize.STRING
          },
          isAdmin: {
            allowNull: false,
            type : Sequelize.BOOLEAN
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_games');
  }
};


