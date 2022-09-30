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
        const allFeedbacks = await db.Review.find({})
        res.send(allFeedbacks)

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// NEW review route
router.get('/new', async (req, res, next) => {

    try {
        const allFeedbacks = await db.Review.find({})
        // console.log(allFeedbacks)
        const context = { feedbacks: allFeedbacks }
        res.render('feedback/new', context)

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// create - POST route 
router.post('/', async (req, res, next) => {
    try {
        const newFeedbackData = req.body
        const newFeedback = await db.Review.create(newFeedbackData)
        console.log(newFeedback)
        res.redirect(`/snack/${newFeedback.snackItem}`)

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// Show route
router.get('/:feedbackId', async (req, res, next) => {
    try {
        const foundFeedback = await db.Review.findById(req.params.feedbackId).populate('feedback')
        res.render('feedback/Show', { feedback: foundFeedback })
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


// edit - GET route
router.get('/:feedbackId/edit', async (req, res, next) => {
    try {
        const updatedFeedback = await db.Review.findById(req.params.feedbackId);
        console.log(updatedFeedback);
        const context = {
            feedback: updatedFeedback
        }
        return res.render('feedback/Edit', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }

})

// update - PUT route
router.put('/:feedbackId', async (req, res, next) => {
    try {
        const updatedFeedback = await db.Review.findByIdAndUpdate(req.params.feedbackId, req.body);
        console.log(updatedFeedback);
        return res.redirect('/snack/' + updatedFeedback.snackItem)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// destroy - delete 
router.delete('/:feedbackId', async (req, res, next) => {
    try {
        const deleteFeedback = await db.Review.findByIdAndDelete(req.params.feedbackId)
        console.log(deleteFeedback.id, "<<review|", deleteFeedback.snackItem, "<<snackItem")
        res.redirect('/snack/' + deleteFeedback.snackItem)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})






module.exports = router;