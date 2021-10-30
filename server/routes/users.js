/*
File Name: users.js
Student's Name: Zhengliang Ding
Student Id: 301222388
Date: Oct 9, 2021
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
