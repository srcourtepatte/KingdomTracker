const auth = require('../auth');
const db = require('../db/connect');
const cookie = require('cookie');



const createKingdom = async (req, response) =>{
    console.log(req.headers.cookie);
    const cookies = req.headers;
    console.log(cookies);

    response.status(200).json({success: true});
};


module.exports = {createKingdom};