const Flights = require('../models/flights');

function createDes(req, res) {
    Flights.findById(req.params.id, (err, des) => {
        if (err) return res.status(404).send('find by id went Wrong:');
        des.destinations.push(req.body);
        des.save((err) => {
            if (err) return res.status(404).send('save went Wrong:');
            res.redirect(`/flights/${des._id}`);
        });
    });

}
module.exports = {
    createDes: createDes
}