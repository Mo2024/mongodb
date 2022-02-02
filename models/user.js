const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database...")
    })
    .catch(err => {
        throw err;
    })
//One to few
const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { _id: false },
            street: String,
            city: String,
            state: String,
            country: {
                type: String,
                required: true
            }
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res)
}
makeUser();

//When user wants to add a new address
const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: '99 3rd St.',
            city: 'New York',
            state: 'NY ',
            country: 'USA'
        }
    )
    const res = await user.save()
    console.log(res);
}
addAddress('5f4426235f9f6233f9ed0996')