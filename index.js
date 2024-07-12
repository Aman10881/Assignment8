const express = require('express');
const weatherController = require('../controllers/weatherController');

const router = express.Router();

router.get('/weather', weatherController.getWeather);
router.get('/error', (req, res, next) => {
  const err = new Error('This is a forced error.');
  err.status = 500;
  next(err);
});

module.exports = router;
