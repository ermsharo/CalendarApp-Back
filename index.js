const express = require("express");
const dotenv = require("dotenv");
const Reminders = require("./routes/reminders");
const Month = require("./routes/month");
const Locations = require("./routes/locations")


const db = require("./database/connection");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
dotenv.config();

// require("dotenv-safe").config();


const app = express();
const port = process.env.PORT;
app.use(jsonParser);
app.use(cors());


//Database connection

db.authenticate()
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log("DB connection error :", err);
    });

//Routes
app.use(Reminders);
app.use(Month);
app.use(Locations)
// app.use(entriesRoutes);
// app.use(userRoutes);
// app.use(freeDict);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
