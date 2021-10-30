let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    contactName: String,
    contactNumber: Number,
    emailAddress: String
},
{
    collection: "contact"
});

module.exports = mongoose.model('contact', contactModel);