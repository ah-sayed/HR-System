'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Committees', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: 'TIMESTAMP',
            },
            updatedAt: {
                allowNull: false,
                type: 'TIMESTAMP',
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Committees');
    },
};
