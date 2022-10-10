const sequelize = require('../configure/connection');
const { User, Favourite } = require('../models');

const userData = require('./userData.json');
const favouritesData = require('./favouritesData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const favourites of favouritesData) {
    await Favourite.create({
      // ... = 'spread operator' - spreads the content of an object (copying all of the fields) and 
      ...favourites,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();