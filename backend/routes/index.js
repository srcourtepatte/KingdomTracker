const express = require("express");
const app = express();

const userRoutes = require('./userRoute');
const aspectRoutes = require('./aspectRoutes');
const kingdomRoutes = require('./kingdomRoutes');


app.use('/user', userRoutes);
app.use('/aspects', aspectRoutes);
app.use('/kingdoms', kingdomRoutes);


module.exports = app;