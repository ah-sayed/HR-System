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
        type : sequelize.DATE
    },
    interviewTime:{
        type : sequelize.TIME
    },
    callDate:{
        type : sequelize.DATE
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