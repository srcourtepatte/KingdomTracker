const auth = require('../auth');
const db = require('../db/connect');
const cookie = require('cookie');



const createKingdom = async (req, response) =>{
    const cookies = req.headers.cookie;
    const cookieArr = cookie.parse(cookies);
    
    db.promise().query("CALL createKingdom(" + cookieArr.userId + ', "' + req.body.name + '", ' + req.body.heartland + ", " + 
        req.body.charter + ", " + req.body.gov + ", " + req.body.free1 + ", " + req.body.free2 + ", " + "@o_kingdom_id)").then( async (result) =>{
            await db.promise().query("SELECT @o_kingdom_id AS id").then(async (result) =>{
                const kingdom_id = result[0][0];
                console.log(kingdom_id);
                response.status(200).json({success: true, data: kingdom_id});
            });
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

const getKingdomSheet = async (req, response) =>{
    db.promise().query("CALL getKingdomDetails(" + req.params.id + ")").then(async (result)=>{
        const data = result[0][0];
        await db.promise().query("CALL getKingdomAbilities(" + req.params.id + ")").then( async (result)=>{
            data.push(result[0][0]);
            await db.promise().query("CALL getKingdomRuin(" + req.params.id + ")").then(async (result)=>{
                data.push(result[0][0]);
                await db.promise().query("CALL getKingdomSkills(" + req.params.id + ")").then(async (result)=>{
                    console.log(result[0][0]);
                    data.push(result[0][0]);
                    await db.promise().query("CALL getKingdomResources(" + req.params.id + ")").then(async (result)=>{
                        data.push(result[0][0]);
                        await db.promise().query("CALL getKingdomLeaders(" + req.params.id + ")").then(async (result)=>{
                            data.push(result[0][0]);
                            response.status(200).json({success: true, data: data}); 
                        });
                    });
                });
        });        
    }).catch((err)=>{
        response.status(401).json({success: false, message: err});});
    });
    };

    const getLeaders = async (req, response) =>{
        db.promise().query("SELECT * from getKingdomLeaders where kingdom_id = " + req.params.id).then( async (result)=>{
            console.log(result[0]);
            console.log(result[0][0]);
            
            response.status(200).json({success: true, data: result[0]});
        }).catch((err)=>{
            response.status(401).json({success: false, message: err});
        });
    };

    const updateLeaders = async (req, response) =>{
        const data = req.body.leaderData;
        console.log(data);
        db.promise().query("CALL update_kingdom_leaders(" + req.body.id + ", " 
                            + "'" + data[0].name + "', " + data[0].invested + ", " + data[0].role + ", "
                            + "'" + data[1].name + "', " + data[1].invested + ", " + data[1].role + ", "
                            + "'" + data[2].name + "', " + data[2].invested + ", " + data[2].role + ", "
                            + "'" + data[3].name + "', " + data[3].invested + ", " + data[3].role + ", "
                            + "'" + data[4].name + "', " + data[4].invested + ", " + data[4].role + ", "
                            + "'" + data[5].name + "', " + data[5].invested + ", " + data[5].role + ", "
                            + "'" + data[6].name + "', " + data[6].invested + ", " + data[6].role + ", "
                            + "'" + data[7].name + "', " + data[7].invested + ", " + data[7].role + ")"

        ).then( async (result)=>{
            response.status(200).json({success: true});
        }).catch((err)=>{response.status(401).json({success: false, message: err})});    
    }


module.exports = {createKingdom, getUserKingdoms, getKingdomSheet, getLeaders, updateLeaders};