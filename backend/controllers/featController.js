const auth = require('../auth');
const db = require('../db/connect');
const cookie = require('cookie');

const getKingdomFeats = async(req, response)=>{
    db.promise().query("CALL getKingdomFeatures(" + req.params.id + ")").then( async (result)=>{
        console.log(result[0]);
        response.status(200).json({success: true, data: result[0][0]});
    }).catch((err)=>{response.status(401).json({success: false, data: err})});
}

const addKingdomFeat = async(req, response)=>{
    db.promise().query("CALL addKingdomFeat(" + req.params.id + ", " + req.body.feat + ")").then( async()=>{
        response.status(200).json({success: true});
    }).catch((err)=>{response.status(400).json({success: false, message: err})});
}

const getAllFeats = async(req, response) =>{
    db.promise().query("CALL getAllFeats()").then( async(result)=>{
        response.status(200).json({success: true, data: result[0][0]});
    }).catch((err)=>{response.status(400).json({success: false, message: err})});
}



module.exports = {getKingdomFeats, addKingdomFeat, getAllFeats};