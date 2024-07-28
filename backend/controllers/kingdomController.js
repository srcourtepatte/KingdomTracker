const auth = require('../auth');
const db = require('../db/connect');
const cookie = require('cookie');



const createKingdom = async (req, response) =>{
    console.log(req.headers.cookie);
    const cookies = req.headers;
    console.log(cookies);

    response.status(200).json({success: true});
};

const getUserKingdoms = async (req, response) =>{

    const cookies = req.headers.cookie;
    const cookieArr = cookie.parse(cookies);
    user_id = cookieArr.userId;
    db.promise().query("CALL getUserKingdoms(" + user_id + ")").then(async(result) =>{
        if(result[0][0] === null){
            response.status(200).json({success: true, data: "No Kingdoms found"});
        }
        else{
            response.status(200).json({success: true, data: result[0][0]});
        }
    });
};


module.exports = {createKingdom, getUserKingdoms};