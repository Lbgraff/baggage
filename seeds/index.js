const { seedUsers } = require('./user-seeds');
console.log('seedUsers import:', seedUsers);

const seedConnections = require('./Connection-seeds')

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers()
    console.log('\n----- USERS SEEDED -----\n');

    await seedConnections()
    console.log('\n----- CONNECTIONS SEEDED -----\n');

    process.exit(0)
}

seedAll();