const express = require('express');
const router = express.Router();
const flghtCtrl = require('../controllers/flights');
const detailCtrl = require('../controllers/flights');

router.get('/', flghtCtrl.index);
router.get('/:id', detailCtrl.showDetail);

module.exports = router;