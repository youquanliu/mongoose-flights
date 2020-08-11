const Flights = require('../models/flights');

function index(req, res) {
    Flights.find({}, function (err, flights) {
        res.render('flights/index', {
            title: 'Add Flight',
            flights
        });
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add flight' });
}

function create(req, res) {
    console.log(`---------------req.body is:${JSON.stringify(Flights(req.body))}`);
    const flight = new Flights(req.body);
    flight.save(function (err) {
        if (err) return res.redirect('/new');
        console.log(`---------------saved flight instance is:${flight}`);
        res.redirect('/flights');
    });
}
function showDetail(req, res) {
    Flights.findById(req.params.id, function (err, flight) {
        res.render('flights/detail', {
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