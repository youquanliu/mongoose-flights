const Flights = require('../models/flights');

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
    Flights.findById(req.params.id, function (err, flight) {
        res.render('flights/show', {
            title: 'Fligth Detail',
            flight
        })
    })
}

module.exports = {
    index,
    create,
    new: newFlight,
    showDetail
}