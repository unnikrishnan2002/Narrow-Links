const connectToDb = require('./db');
const express = require('express');
const cors = require('cors');
require("dotenv").config();

connectToDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/url', require('./routes/url'));
app.use('/', require('./routes/shortUrl'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})