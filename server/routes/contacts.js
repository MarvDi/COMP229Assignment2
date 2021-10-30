let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

//connect to userModel

let Contact = require('../models/contacts');
// let contactController = require('../controllers/contact');


/* GET route for contact */
router.get('/', (req, res, next) =>{
    Contact.find((err, contactList)=>{
        if(err){
            return console.error(err);
        }else{
            res.render('contactlist/list', {title: 'Contact List', ContactList:contactList})
        }
    });
});



/* GET route for contact List page - CREATE Operation*/
router.get('/add', (req, res, next) =>{ 
    // router.get('/add', contactController.displayAddPage);
    res.render('contactlist/add', {title: 'Add a Contact'});
});

/* POST route for contact List page - CREATE Operation*/
router.post('/add', (req, res, next) =>{
    let newContact = Contact({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });
    Contact.create(newContact, (err, Contact)=>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/contact-list');
        }
    });
});

/* GET route for contact List page - UPDATE Operation*/
router.get('/edit/:id', (req, res, next)=>{
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit)=>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.render('contactlist/edit', {title: 'Contact List', contact:contactToEdit})
        }
    });
});

/* POST route for contact List page - UPDATE Operation*/
router.post('/edit/:id', (req, res, next)=>{
    let id = req.params.id;
    let updateContact = Contact({
        "_id":id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });
    Contact.updateOne({_id:id}, updateContact, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/contact-list');
        }
    })
})

/* GET route for contact List page - DELETE Operation*/
router.get('/delete/:id',(req, res, next)=>{
    let id = req.params.id;

    Contact.remove({_id:id}, (err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/contact-list');
        }
    });

})

module.exports = router;