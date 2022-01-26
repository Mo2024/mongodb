const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviesDB', { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to database...")
    })
    .catch(err => {
        throw err;
    })

//Sets the data type for a table
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

//Name of the table
const Movie = mongoose.model('Movie', movieSchema)
//Creates object but does not sends it to database yet
// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })


//Query
// Movie.find({ rating: 'PG-13' }).then(data => console.log(data))
// Movie.find({ year: { $gte: 2010 } }).then(data => console.log(data))
