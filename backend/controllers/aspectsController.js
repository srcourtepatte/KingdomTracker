const auth = require('../auth');
const db = require('../db/connect');
const cookie = require('cookie');

const getAllHeartlands = async (req, response)=>{
    db.promise().query("CALL getHeartlands()").then(async (result) =>{
        return response.status(200).json({success: true, data: result[0][0]});
    });
};

const getAllCharters = async (req, response)=>{
    db.promise().query("CALL getCharters()").then(async (result) =>{
        return response.status(200).json({success: true, data: result[0][0]});
    });
};

const getAllGovernments = async (req, response) =>{
    db.promise().query("CALL getGovernments()").then(async (result) =>{
        return response.status(200).json({success: true, data: result[0][0]});
    });
};

module.exports = {getAllHeartlands, getAllCharters, getAllGovernments};