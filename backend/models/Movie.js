const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    releaseDate: {
        type: Date,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    cast: {
        type: Array,
        required: false,
    }
});
module.exports = mongoose.model("Movie", movieSchema);