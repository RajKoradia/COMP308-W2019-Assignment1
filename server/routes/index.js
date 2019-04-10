/* File Name :- app.css
    Student Name :- Raj Koradia
    Student ID :- 300907532 */
    
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET products page. */
router.get('/projects', function(req, res, next) {
    res.render('index', { title: 'Projects' });
  });
/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

/* POST Route for processing the contacts page */
router.post('/contact', (req, res, next) => {

  // Post data on Console
  console.log(req.body);

  // Go to Home Page
  res.redirect('/');
  
});
module.exports = router;
