'use strict';
const uuid = require('uuid/v4');
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            uuid: {
                type: Sequelize.UUID,
                defaultValue: uuid(),
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
            },
            phone: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            avatar: {
                type: Sequelize.STRING,
            },
            committee_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Committees', // name of Target model
                    key: 'id', // key in Target model that we're referencing
                },
                onDelete: 'CASCADE',
            },
            hash: {
                type: Sequelize.STRING,
            },
            university: {
                type: Sequelize.STRING,
            },
            faculty: {
                type: Sequelize.STRING,
            },
            year: {
                type: Sequelize.STRING,
            },
            // position_id: {
            //     type: Sequelize.INTEGER,
            //     references: {
            //         model: 'Positions', // name of Target model
            //         key: 'id', // key in Target model that we're referencing
            //     },
            //     onDelete: 'CASCADE'
            // },
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
        return queryInterface.dropTable('Users');
    },
};
