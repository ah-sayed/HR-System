const uuid = require('uuid/v4');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        'user',
        {
            uuid: Sequelize.UUID,
            name: Sequelize.STRING,
            phone: Sequelize.STRING,
            email: Sequelize.STRING,
            avatar: Sequelize.STRING,
            university: Sequelize.STRING,
            hash: Sequelize.STRING,
            faculty: Sequelize.STRING,
            year: Sequelize.STRING,
            committee_id: Sequelize.STRING,
        },
        {
            hooks: {
                //this hook function is called after model is validated
                afterValidate: (user, options) => {
                    user.hash = bcrypt.hashSync(user.hash, 12);
                },
            },
        }
    );

    User.associate = function(models) {
        // associations can be defined here
        User.hasOne(models.committee, {
            foreignKey: 'user_id',
            sourceKey: 'id',
        });
    };

    User.prototype.validPassword = (password, pass, done, user) => {
        // validate given password with existed in db
        bcrypt.compare(password, pass, (err, valid) => {
            if (err) return console.error(err);
            if (valid) done(null, user.toJSON());
            else done(null, false);
        });
    };
    return User;
};
