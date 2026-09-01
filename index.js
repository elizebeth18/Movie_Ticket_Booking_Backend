const express = require('express');
require('./src/config/db');
const movieRouter = require('./src/routers/movies');

const app = express();
app.use(express.json());

//registering the routes
app.use(movieRouter)

app.listen(3000, () => {
    console.log('Server is up and running')
})