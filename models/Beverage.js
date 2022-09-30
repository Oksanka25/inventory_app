const mongoose = require('mongoose');

const beverageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty :(']
    },
    type: {
        type: String,
        required: [true, 'name cannot be empty :(']
    },
    quantity: {
        type: Number,
        required: [true, 'quantity cannot be empty!']
    },
    hasAlcohol: {
        type: Boolean
    },
    expirationDate: {
        type: Date,
        required: [true, 'exp date cannot be empty!']
    },
    timestamps: {
        type: Date,
        default: Date.now()
    }

},
    {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        // {
        //     timestamps: true
        // }
    });

beverageSchema.virtual('beverageData', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'beverageItem'
})

const Beverage = mongoose.model('Beverage', beverageSchema);
module.exports = Beverage;