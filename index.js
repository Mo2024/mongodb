const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviesDB', { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to database...")
    })
    .catch(err => {
        throw err;
    })
