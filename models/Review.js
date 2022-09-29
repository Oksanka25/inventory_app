const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, 'comment cannot be empty :(']
    },
    rating: {
        type: Number,
        required: [true, 'rate cannot be empty!']
    }
},
    {
        timestamps: true
    }
);


const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
