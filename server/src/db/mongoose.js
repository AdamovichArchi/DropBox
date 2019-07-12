const mongoose = require('mongoose')
const env = require('../../src/config/env')

mongoose.connect(env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to Database')
}).catch(err => {
    console.log('Not Connected to Database ERROR: ', err)
})