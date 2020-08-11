const express = require('express');
const router = express.Router();
const flightCtrl = require('../controllers/flights');

router.get('/new', flightCtrl.new); //go to page new
router.post('/new', flightCtrl.create);

module.exports = router;