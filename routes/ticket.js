const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/ticket');

router.get('/ticket/new', ticketCtrl.new);
router.post('/ticket', ticketCtrl.create);
router.post('/flights/:id/ticket', ticketCtrl.addToTickets);

module.exports = router;