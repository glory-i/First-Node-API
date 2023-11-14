//we need it to access the variables in our "dotenv" file 
require('dotenv').config()


const errorMiddleware = (err, req, res, next) =>{
    console.log("An error occured please.")
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "development" ? err.stack : null
    });


}

module.exports = 
{
    errorMiddleware,
}