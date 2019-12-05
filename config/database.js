const Sequelize = require('sequelize');
// const User = require('../models/User');
// const Password = require('../models/Password');
const Participants = require('../models/participants');
const sequelize = new Sequelize('hrsystem', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    timezone: '+02:00',
    operatorsAliases: false,
});
// const models = {
//     User: User.init(sequelize, Sequelize),
//     Password: Password.init(sequelize, Sequelize),
//     Participants: Participants.init(sequelize, Sequelize),
// };

// Run `.associate` if it exists,
// ie create relationships in the ORM
// Object.values(models)
//     .filter(model => typeof model.associate === 'function')
//     .forEach(model => model.associate(models));

// const db = {
//     ...models,
//     sequelize,
// };

module.exports = sequelize;
