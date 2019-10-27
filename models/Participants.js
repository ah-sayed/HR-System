const sequelize = require('sequelize');
const db = require("../config/database");

const Participant = db.define('participants', {
    name:{
        type : sequelize.STRING
    },
    email:{
        type : sequelize.STRING
    },
    university:{
        type : sequelize.STRING
    },
    faculty:{
        type : sequelize.STRING
    },
    year:{
        type : sequelize.STRING
    },
    firstChoice:{
        type : sequelize.STRING
    },
    secondChoice:{
        type : sequelize.STRING
    },
    phone:{
        type : sequelize.STRING
    },
    called:{
        type : sequelize.BOOLEAN
    },
    interviewDate:{
        type : sequelize.DATE,
        //defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        validate: {
            isDate: true,             // only allow date strings
            isAfter: "2019-10-27",    // only allow date strings after a specific date
            isBefore: "2020-03-30",   // only allow date strings before a specific date
        }
    },
    interviewTime:{
        type : sequelize.TIME,
        //defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        validate: {
            
        }
    },
    callDate:{
        type : sequelize.DATE,
        validate: {
            isDate: true,             // only allow date strings
            isAfter: "2019-10-26",    // only allow date strings after a specific date
            isBefore: "2020-03-30",   // only allow date strings before a specific date
        }
    },
    callTime:{
        type : sequelize.TIME
    },
    interviewer:{
        type : sequelize.STRING
    },
    status:{
        type : sequelize.STRING
    },
    note:{
        type : sequelize.STRING
    },
})


module.exports = Participant;