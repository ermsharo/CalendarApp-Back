const locations = require("../models/Locations");

module.exports = class Locations {
  constructor() {}

  async getCitiesList() {
    //this  return all brazilian cities  name info
    const { count, rows } = await locations.findAndCountAll({
      attributes: ["city_name"],
    });
    return rows;
  }

  async insertCityInDB(id, city, lat, long) {
    const [row, created] = await locations.findOrCreate({
      where: {
        id: id,
        city_name: city,
        lat: lat,
        long: long,
      },
    });
  }
};
