const seedUsers = require('./User-seeds');
const sequelize = require('../config/connection');
const User = require('../models/User');
const UserConnections = require('../models/UserConnections');

console.log('seedUsers is:', typeof seedUsers);

User.belongsToMany(User, {
  through: UserConnections,
  as: 'connections',
  foreignKey: 'user_id',
  otherKey: 'connection_id',
});

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();
