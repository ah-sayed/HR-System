const sequelize = require('Sequelize');
const db = require('../config/database');
module.exports = (sequelize, Sequelize) => {
    const Participant = sequelize.define('participant', {
        name: {
            type: Sequelize.STRING,
        },
        email: {
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
        firstChoice: {
            type: Sequelize.STRING,
        },
        secondChoice: {
            type: Sequelize.STRING,
        },
        phone: {
            type: Sequelize.STRING,
        },
        called: {
            type: Sequelize.BOOLEAN,
        },
        hrCalled: {
            type: Sequelize.BOOLEAN,
        },
        interviewDate: {
            type: Sequelize.DATE,
            //defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
            validate: {
                isDate: true, // only allow date strings
                isAfter: '2019-10-27', // only allow date strings after a specific date
                isBefore: '2020-03-30', // only allow date strings before a specific date
            },
        },
        interviewTime: {
            type: Sequelize.TIME,
            //defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
            validate: {},
        },
        callDate: {
            type: Sequelize.DATE,
            validate: {
                isDate: true, // only allow date strings
                isAfter: '2019-10-26', // only allow date strings after a specific date
                isBefore: '2020-03-30', // only allow date strings before a specific date
            },
        },
        callTime: {
            type: Sequelize.TIME,
        },
        interviewer: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING,
        },
        note: {
            type: Sequelize.STRING,
        },
    });
    Participant.associate = function(models) {
        // associations can be defined here
    };
    return Participant;
};
