'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert(
            'Passwords',
            [
                {
                    hash: 'af231sa2dfg56sd4131g8as7fg3s41dg3486s4v5',
                },
            ],
            {
                timestamps: true,
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkDelete('Password', null, {});
    },
};
