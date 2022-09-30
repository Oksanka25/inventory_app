const mongoose = require('mongoose');

const snackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty']
    },
    type: {
        type: String,
        required: [true, 'name cannot be empty']
    },
    quantity: {
        type: Number,
        required: [true, 'quantity cannot be empty!']
    },
    isHealthy: {
        type: Boolean
    },
    expirationDate: {
        type: Date,
        required: [true, 'exp date cannot be empty!']
    },
    // timestamps: {
    //     type: Date,
    //     default: Date.now()
    // }

},
    {
        timestamps: true
    },

    {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
    });

snackSchema.virtual('snackData', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'snackItem'
})

const Snack = mongoose.model('Snack', snackSchema);
module.exports = Snack;