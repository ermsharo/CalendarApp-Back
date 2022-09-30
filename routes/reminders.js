const express = require("express");
const router = express.Router();
const Calendar = require("./../Services/Calendar");
const cal = new Calendar();


router.post("/reminders", async (req, res) => {
    const params = req.params;
    const { title, description, color, start, end, date } = req.body;
    cal.addNewReminder(title, description, color, start, end, date);
    return res.status(200).json({
        params: params,
    });
});

router.delete("/reminders", async (req, res) => {
    cal.deleteReminder(req.query.id);
    return res.status(200)
});

module.exports = router;
