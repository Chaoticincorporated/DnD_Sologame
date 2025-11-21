//Intializing server
const express = require("express");
const server = express();
const port = 3000;
const mongoose = require("mongoose");// import mongoose
require("dotenv").config(); // import dotenv
const {DB_URL} = process.env;// grab var from the .env file
const cors = require("cors"); //disable default browser security
const Npc = require("./models/npc");//importing the model

//middle ware
server.use(express.json());// unsures data is in json format
server.use(express.urlencoded({extended: true}));//encodes and decodes data
server.use(cors());//security

//database connect
mongoose.connect(DB_URL).then(()=>{
    server.listen(port, ()=>{
        console.log(`Database is connect\nServer is listing on ${port}`);
    });
}).catch((error)=> console.log(error.message));

//routes
server.get("/", (request,response)=>{
    response.send("fuck");
});

server.get("/npc", async(request,response)=>{
    try{
        const npcList = await Npc.find();
        response.send(npcList);
    } catch(error){
        server.status(500).send({message:error.message});
    }
})