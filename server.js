const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

//database connection
mongoose.connect('mongodb://localhost:27017/test').then(() => {
  console.log(`Database connection is successful`.red.bold);
});

//server
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});