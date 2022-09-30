
const express = require("express");
const router = express.Router();

router.get("/reminders", async (req, res) => {

    return res.status(200).json({
        awnser: true,
    });
});

module.exports = router;
