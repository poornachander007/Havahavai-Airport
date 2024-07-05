const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Airport = sequelize.define('Airport', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      // autoIncrement: true
    },
    icao_code: DataTypes.STRING,
    iata_code: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    city_id:DataTypes.INTEGER,
    country_id:DataTypes.INTEGER,
    continent_id:DataTypes.INTEGER,
    website_url: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    latitude_deg: DataTypes.FLOAT,
    longitude_deg: DataTypes.FLOAT,
    elevation_ft: DataTypes.FLOAT,
    wikipedia_link:DataTypes.STRING,
  });

  return Airport;
};
