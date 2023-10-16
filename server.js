//create the express app.
const express = require('express')
const app = express()


app.get('/', (req,res)=>{
    res.send('Hello First Node API')
})

app.listen(3000, () => {
    console.log("Frst Node API is running on port 3000")
})

