const express = require('express');
const router = express.Router();


// router.get('/', flghtCtrl.index);
router.get('/', function (req, res, next) {
  res.redirect('/flights');
});

module.exports = router;