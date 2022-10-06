const express = require("express");
const Locations = require("./../Services/Locations");

const loc = new Locations();

const router = express.Router();

router.get("/locations", async (req, res) => {

  let cities = await loc.getCitiesList();
  return res.status(200).json({ "locations": cities });
});

module.exports = router;
