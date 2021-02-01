const express = require('express');
const app = express();

// GET Requests 
app.get('/', (req, res)=>{
    res.send('<h1>Hell</h1>');
})

// Set our server on a port
app.listen(8000)