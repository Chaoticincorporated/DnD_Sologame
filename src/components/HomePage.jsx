import RegionAppPage from './RegionAppPage';
import GlobalNavBar from './GlobalNavBar';
import { useState } from 'react';

export default function HomePage({regionDetails}){
    const [targetPage, setTargetPage] = useState("home");
    //let targetPage = ;
    const ChangePage = (newPage)=>{
        setTargetPage(newPage);
    }
    return (
    <div>
        <div><GlobalNavBar ChangePage={ChangePage}/></div>
        {targetPage === "home" && <div><h1>Home Page</h1></div>}
        {targetPage === "regionPage" && <div><RegionAppPage regionDetails={regionDetails}/></div>}
    </div>)
}