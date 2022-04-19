const express = require("express");
const {sequelize, User, Post} = require('./models'); 

const app = express(); 
app.use(express.json());

app.get('/', function (req, res) {
    res.send('App running')
});

app.listen({port: 5005}, async() =>{
    await sequelize.authenticate()
});