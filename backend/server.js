const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db/connect');
const router = require('./routes');

const backend = express();

backend.use(bodyParser.json());

backend.use(cors({
    credentials: true,
    origin: true,
}));

backend.use('/', router);

backend.listen(process.env.PORT, ()=>{
    console.log("Server started");
});


