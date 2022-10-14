const mongoose = require("mongoose");
require("dotenv").config();

const dbURI = process.env.MONGODBURI;

const connectToDb = () => {
  mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
