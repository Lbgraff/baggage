// const { Connection } = require('../models')

// const connectionData = [
//     {
//         user_id: 1,
//         connected_to_id: 2
//     },
//     {
//         user_id: 1,
//         connected_to_id: 4
//     },
//     {
//         user_id: 3,
//         connected_to_id: 4
//     },
//     {
//         user_id: 2,
//         connected_to_id: 1
//     },



// ]

// const seedConnections = () => Connection.bulkCreate(connectionData, { returning: true, individualHooks: true })

// module.exports = seedConnections

'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('connections', [
            {
                user_id: 1,
                connected_to_id: 2
            },
            {
                user_id: 1,
                connected_to_id: 4
            },
            {
                user_id: 3,
                connected_to_id: 4
            },
            {
                user_id: 2,
                connected_to_id: 1
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Connections', null, {});
    }
};