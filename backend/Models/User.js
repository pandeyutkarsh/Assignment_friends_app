const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    friends: [{ type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
}]
})


module.exports = mongoose.model('User', UserSchema);