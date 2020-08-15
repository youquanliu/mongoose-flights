const Ticket = require('../models/ticket');
const Flight = require('../models/flights');


function create(req, res) {
    Ticket.create(req.body, function (err, ticket) {
        res.redirect('/ticket/new');
    });
}

function newTicket(req, res) {
    Ticket.find({}, function (err, ticket) {
        res.render('ticket/new', {
            title: 'Add Ticket',
            ticket
        });
    })
}


function addToTickets(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        flight.ticket.push(req.body.ticketId);
        flight.save(function (err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}


module.exports = {
    new: newTicket,
    create,
    addToTickets
};
