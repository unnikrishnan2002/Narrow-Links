const mongoos = require('mongoose');
const Schema = mongoos.Schema;

const UrlSchema = new Schema({
    originalUrl: {
        type: String,
        required: true
    },

    shortUrl: {
        type: String,
        required: true
    }
});

module.exports = mongoos.model('Url', UrlSchema);