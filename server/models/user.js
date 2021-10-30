let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

//create a model class
let User = mongoose.Schema({
    userName:{
        type: String,
        default:'',
        trime: true,
        required: 'username is required'
    },
    email:{
        type: String,
        default:'',
        trime: true,
        required: 'email is required'
    },
    created:{
        type: Date,
        default: Date.now
    },
    update:{
        type: Date,
        default: Date.now
    }
},
{
    collection: "users"
});
let options = ({missingPasswordError: 'Wrong/Missing Password'});
User.plugin(passportLocalMongoose,options);

module.exports.User = mongoose.model('User', User);