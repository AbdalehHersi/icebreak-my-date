const sequelize = require('../config/connection');
const { User, Favourites } = require('../models');

const userData = require('./userData.json');
const favouritesData = require('./favouritesData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const favourites of favouritesData) {
    await Favourites.create({
      ...favourites,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();