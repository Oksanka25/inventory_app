const mongoose = require('mongoose');
const { Review } = require('.');

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
    },
    timestamps: {
        type: Date,
        default: Date.now()
    }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
}
    // {
    //     timestamps: true
    // },

);

fridgeSchema.virtual('fridgeData', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'fridgeItem'
})

const Fridge = mongoose.model('Fridge', fridgeSchema);

module.exports = Fridge;
