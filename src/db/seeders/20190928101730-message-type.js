'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('MessageType', [{
            description: 'Message',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            description: 'Command',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            description: 'State',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('MessageType', null, {});
    }
};
