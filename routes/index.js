//
// @#GGGGGGGGGB#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#BGPJ77?7?Y#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G!7777!!!!77?Y#@@@@@@@@@@@@@@@@@@@@@@@@@@@@&BBBBBGJ77777?GGP@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G7777JPP5J777!7B@@@@@@@@@@@@@@@@@@@@@@@@@@&BGBBBBB&P77777!?#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G77775@@@@Y777!J@@@@@@@@@@@@@@@@@@@@@@@@@@@&#BBB#@@B?7777J&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G7777Y@@@#J777!P@@@@&BP5YYYPG#@@@@@@@&BGGPP5G@&&@@&####BB##BB&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G7777?JJ?777!75@@@&P?7!?JJ?7!7J#@@@@@@#J!!!!!5@@@@@@@@@&BBBBBB#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G777777!777JG&@@@&J!77?B##B577!7#@@@@@P777777?5@@@@@@@&@#BBBBBB&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G7777YB?!7775&@@@G!777?????????7G@@@@&?!777?#@#&@@@@@5Y@@#GGGGP#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G7777Y@&P777!7P&@B7777Y#&&&&BB#&@@@@@@&J!7JB#B##B#@#J!7?????7?B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @G!77!Y@@@#Y777!?G@B?!77?YYYJ77?5@@@@@@@@5JBBBBBBGB&J!7777!!!J#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @B????5@@@@@GJ????Y&&GY?7777?JYG&@@@@@@@@@#BBBBBBBB@&577??JJ5&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@&@@@@@&&&&&@@@@@@@@@@@@@@@@&&&&&&@@@GJ&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @&B###BBBB###&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&@#PPPP#@@@@@@@@@@&J???Y@@@@@@@@@@@@@@@@@@@@@
// @#5PPPP5555PPPPB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#5PPP#@@@@@@@@@@&?77!J@@@@@@@@@@@@@@@@@@@@@
// @#PPPPG###BPPPP5G@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#PPPP#@@@@@@@@@@&?777J@@@@@@@@@@@@@@@@@@@@@
// @#PPPPB@@@@&PPPPP&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#PPPP#@@@@@@@@@@&?777J@@@@@@@@@@@@@@@@@@@@@
// @#PPPPG@@@&BPPPPP&@&#BGGGGGBBBBBB#@@@@@@#BBBB#@@#BGGGGGB&#PPPP##BGGGB#&@@&?777J@@@&G5YJJJYPB@@@@@@@@
// @#PPPPPPPPPPPPPP#@#PPPPGGGPG&G5PPPB@@@@BPPP5G&BPPP5PPPPP##PPPPPPPPPPPPPG@&?777J@&577!?Y5J7!7?G@@@@@@
// @#PPPPPPPPPPGB#@@@G5PPP#&&&@@@BPPPPG@@BPPPPB@GPPPPB&&@&&@#PPPPG&@@&GPPP5#&?777Y&J!77?GBBB577!7B@@@@@
// @#PPPPG@@@@@@@@@@@&BGPP5PPPB&@@#PPPPGBPPPPB@&PPPPG@@@@@@@#PPPP#@@@@#PPPP#&?777YG!777??????JJJ?P@@@@@
// @#PPPPB@@@@@@@@@@@@&@&&BPPP5P@@@&PPPPPPPP#@@@PPPPP#@@@@@@#PPPP#@@@@#PPPP#&?777Y&7777J#@@@&GG#&@@@@@@
// @#5PP5G@@@@@@@@@@&P5PGBGPPPPG@@@@&PPPPPP#@@@@&GPPPPPGGPP&#5PP5#@@@@#5PP5#&?!7!J@#J7!!7JJJ?!!75@@@@@@
// @#GGGGB@@@@@@@@@@&BGPPPPPGG#@@@@@#PPPPP&@@@@@@@&BGGPPPPG##GGGG&@@@@#GGGG#@YJJJ5@@@B5J?????J5B@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BPPPPG&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BPPPPG@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BPPPPB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//
// Project:      RePsychle - Beta
// Description:  A website that aims to allow users to create an account, upload database entries, CRUD accessibility to make better recycling decisions.
// Name:         Wyatt Kirschner
// Course:       COMP3006
// Date:         4/23/2022
//

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

/*
    Static Pages
 */

/* GET About page. */
router.get('/about', (req, res, next) => {
  res.render('about');
});

/* GET Contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact');
});

/* GET How page. */
router.get('/how', (req, res, next) => {
  res.render('how');
});

/* GET Repsychle_Blog page. */
router.get('/repsychle_blog', (req, res, next) => {
  res.render('repsychle_blog');
});

/* GET 301 page. */
router.get('/301', (req, res, next) => {
  res.render('301');
});

/* GET 401 page. */
router.get('/401', (req, res, next) => {
  res.render('401');
});

/* GET 404 page. */
router.get('/404', (req, res, next) => {
  res.render('404');
});

/* GET 500 page. */
router.get('/500', (req, res, next) => {
  res.render('500');
});

/* GET 502 page. */
router.get('/502', (req, res, next) => {
  res.render('502');
});



module.exports = router;
