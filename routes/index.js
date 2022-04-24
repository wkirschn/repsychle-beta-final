var express = require('express');
var router = express.Router();
// Import the User model and passport
const User = require('../models/user');
const passport = require('passport');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Login page. */
router.get('/login', (req, res, next) => {

  // Obtain messages if any will be displayed here
  let messages = req.session.messages || [];
  // Clear messages if any
  req.session.messages = [];
  // Pass messages to view if needed
  res.render('login', { title: 'Login', messages: messages });
});

/* POST Login page. */

router.post('/login', passport.authenticate('local', {
  successRedirect: '/recycling',
  failureRedirect: '/login',
  failureMessage: 'Invalid credentials'
}));

/* GET Register page. */
router.get('/register', (req, res, next) => {
  res.render('register', { title: 'Create a new account' });
});

/* POST Register page. */
router.post('/register', (req, res, next) => {
  // Create a new user based on the information from the page
  console.log(req.body.username);
  User.register(new User({
    username: req.body.username,
    profile: req.body.profile,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }),
    req.body.password,
    (err, newUser) => {
      if (err) {
        console.log(err);
        // take user back and reload register page
        return res.redirect('/registers');
      }
      else {


        // log user in
        req.login(newUser, (err) => {
          res.redirect('/recycling');
        });
      }
    });
});

/* GET Logout page. */
router.get('/logout', (req, res, next) => {
  // log the user out using the request object
  req.logout();
  // redirect to login page
  res.redirect('/login');
});


module.exports = router;
