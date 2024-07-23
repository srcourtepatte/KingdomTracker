const auth = require('../auth');
const db = require('../db/connect');
const cookie = require('cookie');

const getAllHeartlands = async (req, response)=>{
    db.promise().query("CALL getHeartlands()").then(async (result) =>{
        console.log(result[0][0][0]);
        return response.status(200).json({success: true, data: result[0][0]});
    });
};

module.exports = {getAllHeartlands};