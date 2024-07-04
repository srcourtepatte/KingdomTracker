const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db/connect');

const backend = express();

backend.use(cors({
    origin: 'http://localhost:3000'
}));

backend.use('/', router);

backend.listen(3000, ()=>{
    console.log("Server started");
});


