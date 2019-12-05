'use strict';
module.exports = (sequelize, Sequelize) => {
    const Committee = sequelize.define(
        'committee',
        {
            name: Sequelize.STRING,
        },
        {}
    );
    Committee.associate = function(models) {
        Committee.belongsTo(models.user, {
            foreignKey: 'user_id',
            sourceKey: 'id',
        });
        Committee.belongsTo(models.code, {
            foreignKey: 'committee_id',
            sourceKey: 'id',
        });
        
    };
    return Committee;
};
