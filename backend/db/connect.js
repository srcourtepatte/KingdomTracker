require('dotenv').config();
const mySql = require('mysql2');

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.PORT;

const connection = mySql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT
});

connection.connect((err)=>{
    if (err) throw err;
    console.log("Connected!");
});

module.exports = connection;