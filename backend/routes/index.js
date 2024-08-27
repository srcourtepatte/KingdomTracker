const express = require("express");
const app = express();

const userRoutes = require('./userRoute');
const aspectRoutes = require('./aspectRoutes');
const kingdomRoutes = require('./kingdomRoutes');
const featRoutes = require("./featRoutes");


app.use('/user', userRoutes);
app.use('/aspects', aspectRoutes);
app.use('/kingdoms', kingdomRoutes);
app.use('/features', featRoutes);


module.exports = app;