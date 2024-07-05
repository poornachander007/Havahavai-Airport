const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const airport = require("./models/airport");

const app = express();

// Sequelize setup
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

// Models
const Airport = require("./models/airport")(sequelize);
console.log(Airport);

const City = require("./models/city")(sequelize);

const Country = require("./models/country")(sequelize);

// Associations
Airport.belongsTo(City, { foreignKey: "city_id" });
City.belongsTo(Country, { foreignKey: "country_id" });

// API endpoint
app.get("/airport", async (req, res) => {
  debugger;

  const { iata_code } = req.query;
  console.log(iata_code);

  try {
    const airport = await Airport.findOne({
      where: { iata_code },
      include: [
        {
          model: City,
          include: Country,
        },
      ],
    });

    if (!airport) {
      return res.status(404).json({ message: "Airport not found" });
    }

    // Format response
    const response = {
      airport: {
        id: airport.id,
        icao_code: airport.icao_code,
        iata_code: airport.iata_code,
        name: airport.name,
        type: airport.type,
        latitude_deg: airport.latitude_deg,
        longitude_deg: airport.longitude_deg,
        elevation_ft: airport.elevation_ft,
        address: {
          city: {
            id: airport.City.id,
            name: airport.City.name,
            country_id: airport.City.country_id,
            is_active: airport.City.is_active,
            lat: airport.City.lat,
            long: airport.City.long,
          },
          country: {
            id: airport.City.Country.id,
            name: airport.City.Country.name,
            country_code_two: airport.City.Country.country_code_two,
            country_code_three: airport.City.Country.country_code_three,
            mobile_code: airport.City.Country.mobile_code,
            continent_id: airport.City.Country.continent_id,
          },
        },
      },
    };

    res.json(response);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
