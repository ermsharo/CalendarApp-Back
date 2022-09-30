const Locations = require("../models/Locations");

module.exports = class Locations {

    constructor() {

    }


    getCitiesListByFederation(federation) {
        //this function get a federation and return all yours cities info

    }

    async insertCitiesInDB(id, city, lat, long) {

        const [row, created] = await Locations.findOrCreate({
            where: {
                id: id,
                city_name:city,
                lat: lat,
                long: long,
            },
        });

    }




}
