// Starting an app
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// 2. Requiring and Initializing
require('./config/db.connection');
const methodOverride = require('method-override');
require("dotenv").config();
//getting the MongoDB connection
require('./config/db.connection.js');
const controllers = require('./controllers')


// 3. Middleware - executes for every request 
// defines the view engine
app.set("view engine", "jsx");

// Creates link to JSX
app.engine("jsx", require("express-react-views").createEngine());

// instantiates MethodOverride for CRUD actions
app.use(methodOverride("_method"))

// to Parse req.body
// body-parser middleware -> intercept the data from our post request; it takes all of the data content and creates an object - req.params 
// request body -> data - parsed by the middleware
app.use(express.urlencoded({ extended: false }))

// establishes Middleware Process
app.use((req, res, next) => {
    console.log('I am here for the routes ')
    next()
})

// express.static helps express find where certain files are located
app.use(express.static('public'))

// CONTROLLERS
app.use('/fridge', controllers.fridge);
app.use('/review', controllers.review);
app.use('/beverage', controllers.beverage);
app.use('/comment', controllers.comment);
app.use('/snack', controllers.snack);
app.use('/feedback', controllers.feedback);

//  "Home" route 
app.get('/', (req, res) => res.render('Home'))



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))