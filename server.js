//we need it to access the variables in our "dotenv" file 
require('dotenv').config()

//create the express app.
const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoute')
const {errorMiddleware} = require('./Middleware/ErrorMiddleware')
const cors = require('cors')

const app = express()


//variables for accessing env variables
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000  //if variable not found, use 3000

//dummy sites that can access the backend using CORS policy
const FRONT_END = process.env.FRONT_END
const SECOND_FRONT_END = process.env.SECOND_FRONT_END



//CORS means Cross Origin Resource Sharing. Basically deals with allowing a domain that is different from the domain of the backend server to access the backend server
//this corsOptions can help us specify other origins (e.g domains) that can access our backend

var corsOptions = {
    origin: [FRONT_END,SECOND_FRONT_END],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }



//for allolwing the app to use cors middleware, 
app.use(cors(corsOptions))


// for allowing the app to  recognize jsonbody
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//for specifying the route of a router.
//[in a way, router is like controller and each route there is like an endpoint
// so the below line of code is to write like the 'base url' if you like for all routes(endpoints) in the router (controller)]

app.use('/api/v1/Product', productRoute);



app.get('/', (req,res)=>{
    throw new Error('fugazi error');
    //res.send('Hello YOU BEAUTFUL PROGRAMMER')
})


//add middlewares
app.use(errorMiddleware);


mongoose.set("strictQuery", false);

//connect to database before listening for the app
mongoose.connect(MONGO_URL)
.then(()=>{

    app.listen(PORT, () => {
        console.log(`Frst Node API is running on port ${PORT}`)
    })

    console.log("Connected to Mongo DB")
})

.catch((error)=>{
console.log(error);
})