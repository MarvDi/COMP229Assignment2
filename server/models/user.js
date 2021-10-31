let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

//create a model class
let User = mongoose.Schema({
    userName:String,
    password:String,
    email: String
},
{
    collection: "users"
});
let options = ({missingPasswordError: 'Wrong/Missing Password'});
User.plugin(passportLocalMongoose,options);

module.exports.User = mongoose.model('User', User);