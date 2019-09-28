'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Log', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                allowNull: false,
                type: Sequelize.STRING
            },
            nick: {
                allowNull: false,
                type: Sequelize.STRING
            },
            message: {
                allowNull: false,
                type: Sequelize.STRING
            },
            mdate: {
                allowNull: false,
                type: Sequelize.DATE
            },
            messageType: {
                allowNull: false,
                references: {
                    model: 'MessageType',
                    key: 'id'
                },
                type: Sequelize.INTEGER
            },
            source: {
                allowNull: false,
                references: {
                    model: 'Source',
                    key: 'id'
                },
                type: Sequelize.INTEGER
            },
            channel: {
                allowNull: false,
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Log');
    }
};
