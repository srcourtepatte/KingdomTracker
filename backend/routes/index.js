const express = require("express");
const app = express();

const userRoutes = require('./userRoute');
const heartlandRoutes = require('./heartlandRoutes');


app.use('/user', userRoutes);
app.use('/aspects', heartlandRoutes);


module.exports = app;