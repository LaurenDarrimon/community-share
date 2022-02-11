//import requreed seed files 

const seedLocation = require('./locationData');
const seedUsers = require('./userData');
const seedItems = require('./itemData');
const seedComments = require('./commentData');

//connect to the database 
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n --- DATABASE SYNCED ----\n');
  await seedLocation();
  console.log('\n----- LOCATIONS SEEDED ---\n');

  await seedUsers();
  console.log('\n--- USERS SEEDED -----\n');

  await seedItems();
  console.log('\n----- ITEMS SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

//function to run all the seed js files, filling our database tables with seed data
seedAll();