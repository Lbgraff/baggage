const { User } = require('../models');

async function seedUsers() {
  await User.bulkCreate([
    {
      email: 'anniem@gmail.com',
      password: 'password',
      first_name: 'Annie',
      last_name: 'McGregor',
      age: 53,
      gender: 'Female',
      marriage: 'One',
      children: '3 or more',
      family: 'Yes',
      debt: 'No',
      smoker: 'Yes',
      travel: '0-25%',
      bio: 'I am a high school English teacher. I love working with kids and am looking for someone with similar interests',
    }
  ]);
  console.log('Users seeded');
}

module.exports = { seedUsers };