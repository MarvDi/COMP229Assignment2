let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

//connect to userModel

let Contact = require('../models/contacts');

/* GET route for contact */
router.get('/', (req, res, next) =>{
    Contact.find((err, contactList)=>{
        if(err){
            return console.error(err);
        }else{
            res.render('list', {title: 'Contact List', ContactList:contactList})
        }
    });
});

module.exports = router;

/* GET route for contact */