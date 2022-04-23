var express = require('express');
var router = express.Router();




router.use(express.urlencoded({extended: false}))



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET 301 Error page. */
router.get('/301', function(req, res, next) {
  res.render('301');
});

/* GET 401 Error page. */
router.get('/401', function(req, res, next) {
  res.render('401');
});

/* GET 404 Error page. */
router.get('/404', function(req, res, next) {
  res.render('404');
});

/* GET 500 Error page. */
router.get('/500', function(req, res, next) {
  res.render('500');
});


/* GET 502 Error page. */
router.get('/502', function(req, res, next) {
  res.render('502');
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});


/* GET Frequently Asked Questions page. */
router.get('/faq', function(req, res, next) {
  res.render('faq');
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* GET Register page. */
router.get('/register', (req, res, next) => {
  /*    const messages = req.flash();
      res.render('register', {messages})*/
  res.render('register');
});









module.exports = router;
