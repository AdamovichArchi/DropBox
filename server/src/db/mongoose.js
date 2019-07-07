const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Dropbox', {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to Database')
}).catch(err => {
    console.log('Not Connected to Database ERROR: ', err)
})