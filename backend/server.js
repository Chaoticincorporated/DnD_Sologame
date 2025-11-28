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
        //console.log(npcList);
        response.send(npcList);
    } catch(error){
        console.log("db handler");
        server.status(500).send({message:error.message});
    }
});
server.post("/npc", async(request,response)=>{
    const {name, race, logic} = request.body;
    console.log(name + " " + race);
    const newNpc = new Npc({
        id: (await Npc.find()).length+1,
        name,
        race,
        gender: setGender(),
        outlook: setOutlook(logic),
        dominantTrait: 0,
        traits: setTraits(logic),
        ambitions: setAmbitions(logic),
    });
    //console.log(newNpc);
    try{
        await newNpc.save();
        response.status(200).send({message: "Npc added successfully"});
    } catch(error){
        //console.log("create handler");
        response.status(400).send({message:error.message});
    }
})
//other functions
const getRandomInt = (max)=> {
        return Math.floor(Math.random() * max);
    }
const setGender = ()=> {
        return (getRandomInt(2) == 0)? "male" : "female"
    }
const setOutlook = (logic)=>{
        return logic.characterLogic.outlook[getRandomInt(14)][getRandomInt(2)];
    }
const setAmbitions = (logic)=>{
        let ambitionsList = [];
        for (let i =0; i < getRandomInt(3); i++)
        {
            let id = getRandomInt(22)
            while(ambitionsList.includes(logic.characterLogic.ambitions[id]))
            {
                id = getRandomInt(22)
            }
            ambitionsList.push(logic.characterLogic.ambitions[id]);
        }
        return ambitionsList;
    }
const checkForOpposingTrait = (setId, indexId, logic, traitList)=> {
    let traitCheck = false;
        if (indexId === 0)
        {
            traitList.forEach(trait => {
                if (trait.traitName === logic.characterLogic.traits[setId][1])
                {
                    //console.log(trait.traitName)
                    traitCheck = true;
                }
            });
        } else {
            traitList.forEach(trait => {
                if (trait.traitName === logic.characterLogic.traits[setId][0])
                {
                    //console.log(trait.traitName)
                    traitCheck = true;
                }
            });
        }
    return traitCheck;
    }
const checkForPreexistingTrait = (targetTrait, traitList)=>{
    //console.log(traitList);
    //console.log(targetTrait);
    let traitCheck = false;
    traitList.forEach(trait => {
        
        if (trait.traitName === targetTrait)
        {
            //console.log(trait.traitName)
            traitCheck = true;
        }
    });
    return traitCheck;
}
const setTraits = (logic)=>{
        let traitList = [];
        while (traitList.length < 10)
        {
            let setId = getRandomInt(39);
            let indexId = getRandomInt(2);
            let isOpposing = checkForOpposingTrait(setId, indexId,logic,traitList);
            while(isOpposing === false)
            {
                setId = getRandomInt(39);
                indexId = getRandomInt(2);
                isOpposing = checkForOpposingTrait(setId, indexId,logic,traitList);
            }
            console.log(checkForPreexistingTrait(logic.characterLogic.traits[setId][indexId], traitList));
            if (!checkForPreexistingTrait(logic.characterLogic.traits[setId][indexId], traitList)){
                
                traitList.push({traitName: logic.characterLogic.traits[setId][indexId], intensity: 1});
                //console.log(traitList.findIndex(({traitName})=>traitName === logic.characterLogic.traits[setId][indexId]));
                //console.log(traitList.includes(({traitName})=>traitName === logic.characterLogic.traits[setId][indexId]));
            }
            else {
                //console.log(traitList.findIndex(({traitName})=>traitName === logic.characterLogic.traits[setId][indexId])+"fuck");
                traitList[traitList.findIndex(({traitName})=>traitName === logic.characterLogic.traits[setId][indexId])] = 
                {
                    traitName: logic.characterLogic.traits[setId][indexId],
                    intensity: traitList[traitList.findIndex(({traitName})=>traitName === logic.characterLogic.traits[setId][indexId])].intensity+1
                }
            }
        }
        //console.log(traitList);
        return traitList;
    }