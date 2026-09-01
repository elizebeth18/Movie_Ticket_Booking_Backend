const express = require('express');
const router = new express.Router();

const Movie = require('../models/movies');

router.post('/movies', async (req, res, next) => {
    const movie = new Movie(req.body)
    try {
        const savedMovie = await movie.save();
        console.log(savedMovie)
        res.status(201).send(savedMovie)
    } catch(error){
        console.log(error)
        res.status(400).send(error)
    }
});


module.exports = router;