'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.createTable('BadBoobs', {
                    id: {
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                        type: Sequelize.INTEGER
                    },
                    message: {
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
                }, {transaction}
            );

            await queryInterface.addIndex(
                'BadBoobs',
                {
                    fields: ['message']
                },
                {transaction}
            );

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('BadBoobs');
    }
};
