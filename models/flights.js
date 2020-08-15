const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = require('./destinations').schema;

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function () {
            return new Date().getFullYear();
        }
    },
    destinations: [destinationSchema],
    ticket: [{ type: Schema.Types.ObjectId, ref: 'Ticket' }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flights', flightSchema);