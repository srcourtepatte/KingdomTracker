const auth = require('../auth');
const db = require('../db/connect');
const cookie = require('cookie');



const createKingdom = async (req, response) =>{
    const cookies = req.headers.cookie;
    const cookieArr = cookie.parse(cookies);
    console.log(cookieArr);
    console.log(req.body);
    
    db.promise().query("CALL createKingdom(" + cookieArr.userId + ', "' + req.body.name + '", ' + req.body.heartland + ", " + 
        req.body.charter + ", " + req.body.gov + ", " + req.body.free1 + ", " + req.body.free2 + ", " + "@o_kingdom_id)").then( async (result) =>{
             response.status(200).json({success: true});
        }).catch((err) =>{
            response.status(401).json({success: false, message: err});
            console.log(err);});
   
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