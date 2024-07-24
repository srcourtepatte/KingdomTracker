const express = require("express");
const app = express();

const userRoutes = require('./userRoute');
const aspectRoutes = require('./aspectRoutes');


app.use('/user', userRoutes);
app.use('/aspects', aspectRoutes);


module.exports = app;