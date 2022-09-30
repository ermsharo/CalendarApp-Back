const express = require("express");
const Calendar = require("./../Services/Calendar");
const cal = new Calendar();

const router = express.Router();

router.get("/calendar/", async (req, res) => {

  console.log("-> query: ",req.query);
  const {month, year} = req.query;
  //  const month = req.params.month;

  //  const year = req.params.year;
  return res.status(200).json({

    days: cal.getMonthData(2022, 1),
     month: month,
     year: year,
  });
});

module.exports = router;
