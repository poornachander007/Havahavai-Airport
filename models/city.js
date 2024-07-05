const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const City = sequelize.define("City", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      // autoIncrement: true
    },
    name: DataTypes.STRING,
    alt_name: DataTypes.STRING,
    country_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    lat: DataTypes.FLOAT,
    long: DataTypes.FLOAT,
  });

  return City;
};
