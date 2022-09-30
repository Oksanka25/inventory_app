const express = require('express')
// import express to access Router function

const router = express.Router()
// creates an instance of the router 

// MODELS
const db = require('../models')



// NEW review route
router.get('/new', async (req, res, next) => {

    try {
        const allReviews = await db.Review.find({})
        // console.log(allReviews)
        const context = { reviews: allReviews }
        res.render('reviews/new', context)

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})