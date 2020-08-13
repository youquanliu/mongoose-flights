const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    destinations: {
        type: String
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('destinationSchema', destinationSchema);