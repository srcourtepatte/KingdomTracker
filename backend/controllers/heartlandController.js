const auth = require('../auth');
const db = require('../db/connect');
const cookie = require('cookie');

const getAllHeartlands = async ()=>{
    db.promise().query("CALL getHeartlands()").then(async (result) =>{
        return result;
    });
};

module.exports = {getAllHeartlands};