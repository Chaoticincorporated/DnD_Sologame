import RegionAppPage from './RegionAppPage';
import GlobalNavBar from './GlobalNavBar';
import PopAppPage from './PopAppPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NpcContainer from './NpcContainer';

export default function HomePage({regionDetails, raceDetails, logic}){
    const [targetPage, setTargetPage] = useState("home");
    const [npcList, setNpcList] = useState([]);
    const [npcFormResponse, setNpcFormResponse] = useState();
    //const [npcFormLoading, setNpcFormLoading] = useState(false)
    const [newNpc, setNewNpc] = useState({
        name: "",
        race: "",
        logic: logic
    });
    //const [ambitionsList, setAmbitionsList] = useState([]);
    //const [traitList, setTraitList] = useState([]);
    //console.log(npcFormResponse);
    useEffect(()=>{
        handleNpcDB();
    }, [npcFormResponse])
    
    const createNpc = async (e)=> {
        e.preventDefault();
        console.log(newNpc);
        try {
            await axios.post("http://localhost:3000/npc", newNpc)
            .then((response)=>setNpcFormResponse(response.data.message))
            .then(()=>handleResetNewNpc());
        } catch (err){
            //console.log("create handler");
            console.log(err.message);
        }
    }
    const handleNpcDB = async()=>{
        try{
            const response = await axios.get("http://localhost:3000/npc");
            //console.log(response);
            //console.log(npcFormResponse);
            setNpcList(response.data)
            //console.log(npcList);
        }catch(err){
            
            console.log(err.message);
        }
    }
    const handleResetNewNpc = ()=>{
        setNewNpc({
            name: "",
            race: "",
            logic: logic
        })
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
        {targetPage === "npcPage" && <div><NpcContainer npcList={npcList} newNpc={newNpc} createNpc={createNpc} handleOnChange={handleOnChange}/></div>}
    </div>)
}