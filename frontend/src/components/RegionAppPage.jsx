import ProvinceContainer from './ProvinceContainer';
import ProvinceNavBar from './ProvinceNavBar';
import { useState } from 'react';

/*
regionDetails.map((region)=>{
            return {region:region.regionName, provinceList:region.provinces}
        })
            {
                
            }
*/
export default function RegionAppPage({regionDetails}){
    const [targetRegion, setTargetRegion] = useState([]);
    const SwitchRegion = (regionToSwitch)=> {
        if (regionToSwitch != null)
        {
            const clearSelection = targetRegion.filter((newReg)=>newReg.regionName === regionToSwitch.regionName)
            //const newRegion = regionDetails.find((region)=>region.regionName === regionToSwitch);
            setTargetRegion(clearSelection)
            setTargetRegion((prevRegion)=>{
            return [
                ...prevRegion,
                {
                    ...regionToSwitch,
                    region:regionToSwitch.regionName, 
                    provinceList:regionToSwitch.provinces
                }
            ]
        });
        }
    };
    return (
    <div>
        <div className='navBar'><ProvinceNavBar gameDetails={regionDetails} SwitchRegion={SwitchRegion}/></div>
        <div>
        {targetRegion.map((region)=>(
            <ProvinceContainer key={region.id} regionName={region.regionName} regionProvinces={region.provinceList}/>
        ))}
        </div>
    </div>)
}