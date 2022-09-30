// import express to access Router function
const express = require('express')

// creates an instance of the router 
const router = express.Router()


// MODELS
const db = require('../models')

// get all beverage items route
router.get('/', async (req, res, next) => {
    try {
        const beverageItems = await db.Beverage.find({});
        const context = { beverageItems }
        console.log(beverageItems);
        return res.render('beverage/Index', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// NEW bev item

router.get('/new', (req, res) => {
    res.render('beverage/New')
})

// SHOW route 
router.get('/:id/', async (req, res, next) => {
    try {
        const foundBeverageItem = await db.Beverage.findById(req.params.id).populate({
            path: 'beverageData'
        })
        const allComments = await db.Review.find({ beverageItem: req.params.id })
        console.log(allComments.length, 'Items Found');
        const context = {
            oneBevItem: foundBeverageItem,
            comments: allComments,
            message: "Hello there"
        }
        return res.render('beverage/Show', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// EDIT route
router.get('/:id/edit', async (req, res, next) => {
    try {
        const updatedBeverageItem = await db.Beverage.findById(req.params.id);
        console.log(updatedBeverageItem);
        const context = {
            beverageItem: updatedBeverageItem
        }
        return res.render('beverage/Edit', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


// CREATE route 
router.post('/', async (req, res, next) => {
    try {
        if (req.body.hasAlcohol === "on") {
            req.body.hasAlcohol = true;
        } else {
            req.body.hasAlcohol = false;
        }
        const createdBeverageItem = await db.Beverage.create(req.body);
        console.log(`The created beverage item is ${createdBeverageItem}`)
        res.redirect('/beverage');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


// DELETE route 

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedBeverageItem = await db.Beverage.findByIdAndDelete(req.params.id);
        const deletedComment = await db.Review.deleteMany({ beverageItem: req.params.id })
        console.log(`The deleted beverage item is ${deletedBeverageItem}`)
        return res.redirect('/beverage')
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


// UPDATE route

router.put('/:id', async (req, res, next) => {
    try {

        const updatedBeverageItem = await db.Beverage.findByIdAndUpdate(req.params.id, req.body);
        console.log(updatedBeverageItem);
        return res.redirect(`/beverage`)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})




module.exports = router;