const express = require("express");
const router = express.Router();
const Calendar = require("./../Services/Calendar");
const cal = new Calendar();

// router.get("/reminders", async (req, res) => {

//     return res.status(200).json({
//         awnser: true,
//     });
// });

router.post("/reminders", async (req, res) => {
  const params = req.params;
  console.log(req.body);
  const { title, description, color, start, end, date } = req.body;
  cal.addNewReminder(title, description, color, start, end, date);
  return res.status(200).json({
    params: params,
  });
});

router.post("/delete", async (req, res) => {
  //const word = req.params.word;

  const insertionWordInFavorites = await addWordToFavorites(
    wordId,
    word,
    req.userId
  );

  return res.status(insertionWordInFavorites.status).json({
    awnser: insertionWordInFavorites.message,
  });
});

module.exports = router;
