const express = require("express");
const Calendar = require("./../Services/Calendar");
const cal = new Calendar();

const router = express.Router();

router.get("/calendar/", async (req, res) => {
  console.log("-> query: ", req.query);
  const { month, year } = req.query;
  //  const month = req.params.month;

  //  const year = req.params.year;
  let days = await cal.getMonthData(year, month);
  return res.status(200).json({
    days: days,
    month: cal.getMonthString(month),
    year: year,
  });
});

module.exports = router;
