const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        default: 'n/a'
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10, max: 9999,
        // default: 'n/a'
    },
    departs: {
        type: Date,
        default: function () {
            return new Date().getFullYear() - 1;
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Flights', flightSchema);