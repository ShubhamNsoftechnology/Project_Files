const express = require('express');
const connection = require("./connection");
const productRoute = require('./routes/student1');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/student1',productRoute);

module.exports=app;