var User= require('../mosels/user');

//saving user to the database
module.exports = function (router) {

  router.post('/user', function (req, res) {
    var user = new User;
    user.username = req.body.username;
    user.password = req.body.password;
    user.userType = req.body.userType;
    user.email = req.body.email;

    if (req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.userType == null || req.body.userType == '' || req.body.email == null || req.body.email == '') {
      req.send('check whether all the fields are entered');
    }
    else {
      user.save(function (err) {
        if (err) {
          res.send(err);
        } else {
          res.send('user created!');
        }
      });
    }

  });
  return router;
}


/*
 const router = express.Router();
 // declare axios for making http requests
 const axios = require('axios');

 const API = 'https://jsonplaceholder.typicode.com';
 const express = require('express');

 /!* GET api listing. *!/
 router.get('/',function (req, res){
 res.send('api works');
 });

 // Get all posts
 router.get('/posts', function(req, res)  {
 // Get posts from the mock api
 // This should ideally be replaced with a service that connects to MongoDB
 axios.get(API+'/post')
 .then(function(posts) {
 res.status(200).json(posts.data);
 })
 .catch(function(error){
 res.status(500).send(error)
 });
 });

 module.exports = router;
 */
