const express = require('express')
// import express to access Router function

const router = express.Router()
// creates an instance of the router 

// MODELS
const db = require('../models')

// Index route  Beverages
router.get('/', async (req, res, next) => {
    try {
        const allComments = await db.Review.find({})
        res.send(allComments)

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// NEW review route
router.get('/new', async (req, res, next) => {
    try {
        const allComments = await db.Review.find({})
        // console.log(allComments)
        const context = { comments: allComments }
        res.render('comment/new', context)

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// create - POST route 
router.post('/', async (req, res, next) => {
    try {
        const newCommentData = req.body
        const newComment = await db.Review.create(newCommentData)
        console.log(newComment)
        res.redirect(`/beverage/${newComment.beverageItem}`)

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// Show route
router.get('/:commentId', async (req, res, next) => {
    // res.send('hitting review show: '+req.params.reviewId)
    try {
        const foundComment = await db.Review.findById(req.params.commentId).populate('comment')
        res.render('comment/Show', { comment: foundComment })
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


// edit - GET route
router.get('/:commentId/edit', async (req, res, next) => {
    try {
        const updatedComment = await db.Review.findById(req.params.commentId);
        console.log(updatedComment);
        const context = {
            comment: updatedComment
        }
        return res.render('comment/Edit', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }

})

// update - PUT route
router.put('/:commentId', async (req, res, next) => {
    try {
        const updatedComment = await db.Review.findByIdAndUpdate(req.params.commentId, req.body);
        console.log(updatedComment);
        return res.redirect('/beverage/' + updatedComment.beverageItem)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// destroy - delete 
router.delete('/:commentId', async (req, res, next) => {
    try {
        const deleteComment = await db.Review.findByIdAndDelete(req.params.commentId)
        console.log(deleteComment.id, "<<review|", deleteComment.beverageItem, "<<beverageItem")
        res.redirect('/beverage/' + deleteComment.beverageItem)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})






module.exports = router;