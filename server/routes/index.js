/*
File Name: index.js
Student's Name: Zhengliang Ding
Student Id: 301222388
Date: Oct 30, 2021
*/
var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about me page. */
router.get('/About', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET project page. */
router.get('/Project', function(req, res, next) {
  res.render('project', { title: 'Project Page' });
});

/* GET serves page. */
router.get('/Services', function(req, res, next) {
  res.render('service', { title: 'Services Page' });
});

/* GET contact me page. */
router.get('/Contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;

