const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, 'comment cannot be empty :(']
    },
    rating: {
        type: Number,
        required: [true, 'rate cannot be empty!']
    },
    fridgeItem: {
        type: mongoose.Types.ObjectId,
        ref: 'Fridge'
    },
    beverageItem:
    {
        type: mongoose.Types.ObjectId,
        ref: 'Beverage'
    },
    snackItem:
    {
        type: mongoose.Types.ObjectId,
        ref: 'Snack'
    },
},
    {
        timestamps: true
    }
);


const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
