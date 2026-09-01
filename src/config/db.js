const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/movie-ticket-booking-app');
    console.log('MongoDB Connected');
}

connectDB();