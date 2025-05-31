const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db/connect');
const router = require('./routes');

const backend = express();

backend.use(bodyParser.json());

backend.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

backend.use('/', router);

backend.listen(3000, ()=>{
    console.log("Server started");
});


