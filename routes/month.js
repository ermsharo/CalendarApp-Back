const express = require("express");
const Calendar = require("./../Services/Calendar");
const Locations = require("./../Services/Locations");

const cal = new Calendar();
const loc = new Locations();

const router = express.Router();

router.get("/calendar/", async (req, res) => {
  console.log("-> query: ", req.query);
  const { month, year } = req.query;

  let days = await cal.getMonthData(year, month);
  return res.status(200).json({
    days: days,
    month: cal.getMonthString(month),
    year: year,
  });
});

module.exports = router;
