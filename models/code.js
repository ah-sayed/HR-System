'use strict';
module.exports = (sequelize, Sequelize) => {
    const Code = sequelize.define(
        'code',
        {
            code: Sequelize.STRING,
        },
        {}
    );
    Code.associate = function(models) {
        // associations can be defined here
        Code.hasMany(models.committee, {
            foreignKey: 'committee_id',
            sourceKey: 'id',
        });
    };
    return Code;
};
