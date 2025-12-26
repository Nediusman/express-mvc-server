const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const contactController = require('../controllers/contactController');
const dynamicController = require('../controllers/dynamicController');
const echoController = require('../controllers/echoController');

// Home route
router.get('/', homeController.getHome);

// About route
router.get('/about', aboutController.getAbout);

// Contact route
router.get('/contact', contactController.getContact);

// Dynamic data route (time/greeting)
router.get('/time', dynamicController.getCurrentTime);
router.get('/greeting', dynamicController.getGreeting);

// Echo route - accepts JSON and returns it back
router.post('/echo', echoController.echoData);

module.exports = router;