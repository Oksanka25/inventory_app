// import express to access Router function
const express = require('express')

// creates an instance of the router 
const router = express.Router()


// MODELS
const db = require('../models')

/*  Beginning of fridge items routes */

// get all fridge items route
router.get('/', async (req, res, next) => {
    try {
        const fridgeItems = await db.Fridge.find({});
        const context = { fridgeItems }
        console.log(fridgeItems);
        return res.render('Index', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// NEW fridge item

router.get('/new', (req, res) => {
    res.render('New')
})

// SHOW route 
router.get('/:id/', async (req, res, next) => {
    try {
        const foundFridgeItem = await db.Fridge.findById(req.params.id)
        // const allReviews = await db.Review.find({ fridgeItem: req.params.id })
        // console.log(allReviews.length, 'Items Found');
        const context = {
            oneItem: foundFridgeItem,
            // reviews: allReviews,
            message: "Hello there"
        }
        return res.render('Show', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// CREATE route 
router.post('/', async (req, res, next) => {
    try {

        // console.log(`The req.body is ${req.body}`)
        const createdFridgeItem = await db.Fridge.create(req.body);
        console.log(`The created fridge item is ${createdFridgeItem}`)
        res.redirect('/fridge');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})



module.exports = router
