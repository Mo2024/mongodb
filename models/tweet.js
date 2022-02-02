const mongoose = require('mongoose');
const { Schema } = mongoose;


mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database...")
    })
    .catch(err => {
        throw err;
    })
//One to many
const userSchema = new Schema({
    username: String,
    age: Number,
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema)

const makeTweets = async () => {
    const user = new User({ username: 'cockfan99', age: 61 })
    const tweet1 = new Tweet({ text: 'omg i love my cock fmily!', likes: 0 })
    tweet1.user = user;
    user.save();
    tweet1.save();
}


// const makeTweets1 = async () => {
//     const user = await User.findOne({ username: 'cockfan99' })
//     const tweet2 = new Tweet({ text: 'bock bock bock my chickens make noises', likes: 1239 });
//     tweet2.user = user;
//     tweet2.save();
// }

// makeTweets1();

const findTweet = async () => {
    const t = await Tweet.findOne({}).populate('user', 'username')
    console.log(t);
}
findTweet();