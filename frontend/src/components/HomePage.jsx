import RegionAppPage from './RegionAppPage';
import GlobalNavBar from './GlobalNavBar';
import PopAppPage from './PopAppPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NpcContainer from './NpcContainer';

export default function HomePage({regionDetails, raceDetails, npcDetails, logic}){
    const [targetPage, setTargetPage] = useState("home");
    const [npcList, setNpcList] = useState(npcDetails);
    //const [npcFormLoading, setNpcFormLoading] = useState(false)
    const [newNpc, setNewNpc] = useState({});
    const [ambitionsList, setAmbitionsList] = useState([]);
    const [traitList, setTraitList] = useState([]);

    useEffect(()=>{}, [])
    const getRandomInt = (max)=> {
        return Math.floor(Math.random() * max);
    }
    const setGender = ()=> {
        return (getRandomInt(2) == 0)? "male" : "female"
    }
    const setOutlook = ()=>{
        return logic.characterLogic.outlook[getRandomInt(14)][getRandomInt(2)];
    }
    const setAmbitions = ()=>{
        for (let i =0; i < getRandomInt(3); i++)
        {
            let id = getRandomInt(20)
            while(ambitionsList.includes(logic.characterLogic.ambitions[id]))
            {
                id = getRandomInt(20)
            }
            setAmbitionsList((prevData)=>{
                return [...prevData, logic.characterLogic.ambitions[id]]
            })
        }
        return ambitionsList;
    }
    const checkForOpposingTrait = (setId, indexId)=> {
        if (indexId === 0)
        {
            if (traitList.some(traitList => traitList.includes(logic.characterLogic.traits[setId][1])))
            {
                return false;
            }
            else{
                return true;
            }
        } else {
            if (traitList.some(traitList => traitList.includes(logic.characterLogic.traits[setId][0])))
            {
                return false;
            }
            else{
                return true;
            }
        }
    }
    const setTraits = ()=>{
        while (traitList.length < 10)
        {
            let setId = getRandomInt(39);
            let indexId = getRandomInt(2);
            let opposingChecker = checkForOpposingTrait(setId, indexId);
            while(opposingChecker === false)
            {
                setId = getRandomInt(39);
                indexId = getRandomInt(2);
                opposingChecker = checkForOpposingTrait(setId, indexId);
            }
            if (!traitList.some(traitList => traitList.includes(logic.characterLogic.traits[setId][indexId]))){
                setTraitList((prevData)=>{
                return [...prevData, {traitName: logic.characterLogic.traits[setId][indexId], intensity: 1}]
            })
            }
            else {
                const updatedTraitList = traitList.map((trait)=>{
                    if (trait.traitName === logic.characterLogic.traits[setId][indexId])
                    {
                        return {...trait, intensity: trait.intensity+1}
                    }
                    return trait;
                })
                setTraitList(updatedTraitList);
            }
        }
        return traitList;
    }
    const createNpc = async (e)=> {
        e.preventDefault();
        //setNpcFormLoading(true);
        /*
        npcToAdd = {
                id: npcList.length+1, name: newNpc.name, race: newNpc.race, gender: await setGender(), 
                outlook: await setOutlook(), dominantTrait: await getRandomInt(10), traits: await setTraits(), ambitions: await setAmbitions()
            }
        */
        let npcToAdd;
        try {
            const response = new Promise((resolve, ))
        } catch (err){
            //
        }
        setNpcList((prevData)=>{
            return [...prevData, npcToAdd]
        })
        setNewNpc({title: "", body: ""})
    }
    

    //handles when one of the imputs is changed
    const handleOnChange = (e)=>{
        setNewNpc((prevData)=> {
            return {...prevData, [e.target.name]: e.target.value}
        })
    }
    //let targetPage = ;
    const ChangePage = (newPage)=>{
        setTargetPage(newPage);
        
    }
    return (
    <div>
        <div><GlobalNavBar ChangePage={ChangePage}/></div>
        {targetPage === "home" && <div><h1>Home Page</h1></div>}
        {targetPage === "regionPage" && <div><RegionAppPage regionDetails={regionDetails}/></div>}
        {targetPage === "racePage" && <div><PopAppPage raceDetails={raceDetails}/></div>}
        {targetPage === "npcPage" && <div><NpcContainer npcList={npcList} createNpc={createNpc} handleOnChange={handleOnChange}/></div>}
    </div>)
}