const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    genre: [{
        type: String,
        trim: true
    }],
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    releaseDate: {
        type: Date
    },
    language: {
        type: String
    },
    duration: { type: String },
    director: { type: String },
    stars: { type: String },
    plot: { type: String },
    image: {
        type: String
    }
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;