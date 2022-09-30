const express = require('express')
// import express to access Router function

const router = express.Router()
// creates an instance of the router 

// MODELS
const db = require('../models')

// Index route 
router.get('/', async (req, res, next) => {
    // res.send('hitting review index')
    try {
        const allReviews = await db.Review.find({})
        res.send(allReviews)

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// NEW review route
router.get('/new', async (req, res, next) => {

    try {
        const allReviews = await db.Review.find({})
        // console.log(allReviews)
        const context = { reviews: allReviews }
        res.render('review/new', context)

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// create - POST route 
router.post('/', async (req, res, next) => {
    try {
        const newReviewData = req.body
        const newReview = await db.Review.create(newReviewData)
        console.log(newReview)
        res.redirect(`/fridge/${newReview.fridgeItem}`)

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// Show route
router.get('/:reviewId', async (req, res, next) => {
    // res.send('hitting review show: '+req.params.reviewId)
    try {
        const foundReview = await db.Review.findById(req.params.reviewId).populate('review')
        res.render('review/Show', { review: foundReview })
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


// edit - GET route
router.get('/:reviewId/edit', async (req, res, next) => {
    try {
        const updatedReview = await db.Review.findById(req.params.reviewId);
        console.log(updatedReview);
        const context = {
            review: updatedReview
        }
        return res.render('review/Edit', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }

})

// update - PUT route
router.put('/:reviewId', async (req, res, next) => {
    try {
        const updatedReview = await db.Review.findByIdAndUpdate(req.params.reviewId, req.body);
        console.log(updatedReview);
        return res.redirect('/fridge/' + updatedReview.fridgeItem)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// destroy - delete 
router.delete('/:reviewId', async (req, res, next) => {
    try {
        const deleteReview = await db.Review.findByIdAndDelete(req.params.reviewId)
        console.log(deleteReview.id, "<<review|", deleteReview.fridgeItem, "<<fridgeItem")
        res.redirect('/fridge/' + deleteReview.fridgeItem)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})






module.exports = router;