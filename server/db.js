const mongoose = require('mongoose');

const dbURI = "Replace with your own mongoDB URI";

const connectToDb = () => {
    mongoose
        .connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("Database connected!"))
        .catch(err => console.log(err));
}

module.exports = connectToDb;
