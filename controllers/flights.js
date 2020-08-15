const Flights = require('../models/flights');
const Ticket = require('../models/ticket');

function index(req, res) {
    Flights.find({}, function (err, flights) {
        res.render('flights/index', {
            title: 'All Flight',
            flights
        });
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add flight' });
}

function create(req, res) {
    const flight = new Flights(req.body);
    flight.save(function (err) {
        if (err) return res.redirect('/new');
        res.redirect('/flights');
    });
}
function showDetail(req, res) {
    Flights.findById(req.params.id)
        .populate('ticket').exec((err, flight) => {
            Ticket.find(
                { _id: { $nin: flight.ticket } },
                (err, ticket) => {
                    console.log(ticket);
                    res.render('flights/show', {
                        title: 'Flight Detail',
                        flight,
                        ticket
                    })
                }
            )
        })
}

module.exports = {
    index,
    create,
    new: newFlight,
    showDetail
}

