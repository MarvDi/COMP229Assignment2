/*
File Name: contact.js
Student's Name: Zhengliang Ding
Student Id: 301222388
Date: Oct 30, 2021
*/
let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

//connect to contact Model

let Contact = require('../models/contacts');
function requreAuth(req, res, next){
    if (!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}



let contactController = require('../controllers/contact');


/* GET route for contact */
router.get('/', contactController.displayContactList);


/* GET route for contact List page - CREATE Operation*/
router.get('/add', requreAuth, contactController.displayAddPage);

// router.get('/add', (req, res, next) =>{ 
//     res.render('contactlist/add', {title: 'Add a Contact'});
// });

/* POST route for contact List page - CREATE Operation*/
router.post('/add', requreAuth, contactController.processAddPage);
// router.post('/add', (req, res, next) =>{
//     let newContact = Contact({
//         "contactName": req.body.contactName,
//         "contactNumber": req.body.contactNumber,
//         "emailAddress": req.body.emailAddress
//     });
//     Contact.create(newContact, (err, Contact)=>{
//         if(err){
//             console.log(err);
//             res.end(err);
//         }else{
//             res.redirect('/contact-list');
//         }
//     });
// });

/* GET route for contact List page - UPDATE Operation*/
router.get('/edit/:id', requreAuth, contactController.displayEditPage);
// router.get('/edit/:id', (req, res, next)=>{
//     let id = req.params.id;

//     Contact.findById(id, (err, contactToEdit)=>{
//         if(err){
//             console.log(err);
//             res.end(err);
//         }else{
//             res.render('contactlist/edit', {title: 'Contact List', contact:contactToEdit})
//         }
//     });
// });

/* POST route for contact List page - UPDATE Operation*/
router.post('/edit/:id',requreAuth, contactController.processEditPage);
// router.post('/edit/:id', (req, res, next)=>{
//     let id = req.params.id;
//     let updateContact = Contact({
//         "_id":id,
//         "contactName": req.body.contactName,
//         "contactNumber": req.body.contactNumber,
//         "emailAddress": req.body.emailAddress
//     });
//     Contact.updateOne({_id:id}, updateContact, (err) =>{
//         if(err){
//             console.log(err);
//             res.end(err);
//         }else{
//             res.redirect('/contact-list');
//         }
//     })
// })

/* GET route for contact List page - DELETE Operation*/
router.get('/delete/:id', requreAuth, contactController.deleteContact);
// router.get('/delete/:id',(req, res, next)=>{
//     let id = req.params.id;

//     Contact.remove({_id:id}, (err)=>{
//         if(err){
//             console.log(err);
//             res.end(err);
//         }else{
//             res.redirect('/contact-list');
//         }
//     });

// })

module.exports = router;