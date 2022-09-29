const mongoose = require('mongoose');

const fridgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty :(']
    },
    quantity: {
        type: Number,
        required: [true, 'quantity cannot be empty!']
    },
    expirationDate: {
        type: Date,
        required: [true, 'exp date cannot be empty!']
    },
    category: {
        type: String,
    }
},
    {
        timestamps: true
    }
);


const Fridge = mongoose.model('Fridge', fridgeSchema);

module.exports = Fridge;
