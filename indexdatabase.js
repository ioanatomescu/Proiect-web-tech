"use strict"
const express= require('express');

const sequelize=require('./sequelize')
require('./models/students');
const app=express();
app.listen(7000,async()=>{
    console.log('running on port 7000');
    try{
       await sequelize.authenticate();
       console.log('Connection has been estblashied');

    }catch(err){
       console.error('Unable to connect to the database',err);
    }
})