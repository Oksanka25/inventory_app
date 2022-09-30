// import express to access Router function
const express = require('express')

// creates an instance of the router 
const router = express.Router()


// MODELS
const db = require('../models')

// get all snacks items route
router.get('/', async (req, res, next) => {
    try {
        const snackItems = await db.Snack.find({});
        const context = { snackItems }
        console.log(snackItems);
        return res.render('snack/Index', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// NEW snack item

router.get('/new', (req, res) => {
    res.render('snack/New')
})

// SHOW route 
router.get('/:id/', async (req, res, next) => {
    try {
        const foundSnackItem = await db.Snack.findById(req.params.id).populate({
            path: 'snackData'
        })
        const allFeedbacks = await db.Review.find({ snackItem: req.params.id })
        console.log(allFeedbacks.length, 'Items Found');
        const context = {
            oneSnackItem: foundSnackItem,
            feedbacks: allFeedbacks,
            message: "Hello there"
        }
        return res.render('snack/Show', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// EDIT route
router.get('/:id/edit', async (req, res, next) => {
    try {
        const updatedSnackItem = await db.Snack.findById(req.params.id);
        console.log(updatedSnackItem);
        const context = {
            snackItem: updatedSnackItem
        }
        return res.render('snack/Edit', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


// CREATE route 
router.post('/', async (req, res, next) => {
    try {
        if (req.body.isHealthy === "on") {
            req.body.isHealthy = true;
        } else {
            req.body.isHealthy = false;
        }
        const createdSnackItem = await db.Snack.create(req.body);
        console.log(`The created snack item is ${createdSnackItem}`)
        res.redirect('/snack');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


// DELETE route 

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedSnackItem = await db.Snack.findByIdAndDelete(req.params.id);
        const deletedFeedback = await db.Review.deleteMany({ snackItem: req.params.id })
        console.log(`The deleted snack item is ${deletedSnackItem}`)
        return res.redirect('/snack')
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


// UPDATE route

router.put('/:id', async (req, res, next) => {
    try {
        if (req.body.isHealthy === "on") {
            req.body.isHealthy = true;
        } else {
            req.body.isHealthy = false;
        }
        const updatedSnackItem = await db.Snack.findByIdAndUpdate(req.params.id, req.body);
        console.log(updatedSnackItem);
        return res.redirect(`/snack`)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})




module.exports = router;