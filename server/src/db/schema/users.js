const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')

const UsersSchema = new mongoose.Schema({
    login: {
        type     : String,
        required : true,
        trim     : true
    },
    email: {
        type     : String,
        required : true
    },
    password: {
        type     : String,
        required : true
    }
});

UsersSchema.plugin(timestamp);

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;