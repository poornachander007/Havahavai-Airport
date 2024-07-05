const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

// Define models
const Airport = require('./models/airport')(sequelize, DataTypes);
const City = require('./models/city')(sequelize, DataTypes);
const Country = require('./models/country')(sequelize, DataTypes);

// Define associations (example)
Airport.belongsTo(City);
City.belongsTo(Country);

// Sync models with database
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});
