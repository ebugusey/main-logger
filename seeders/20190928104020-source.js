'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Source', [{
            description: 'XMPP',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            description: 'Telegram',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Source', null, {});
    }
};
