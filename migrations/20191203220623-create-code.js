'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Codes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            code: {
                type: Sequelize.STRING,
                required: true,
                allowNull: false,
            },
            committee_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Committees', // name of Target model
                    key: 'id', // key in Target model that we're referencing
                },
                onDelete: 'CASCADE',
            },
            position: {
                type: Sequelize.ENUM,
                values: ['VICE', 'HEAD', 'MEMBER'],
                allowNull: false,
                required: true,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Codes');
    },
};
