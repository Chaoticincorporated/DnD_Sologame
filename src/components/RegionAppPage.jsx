import ProvinceContainer from './ProvinceContainer';
import ProvinceNavBar from './ProvinceNavBar';
import { useState } from 'react';

/*
regionDetails.map((region)=>{
            return {region:region.regionName, provinceList:region.provinces}
        })
*/
export default function RegionAppPage({regionDetails}){
    const [targetRegion, setTargetRegion] = useState({});
    const SwitchRegion = (regionToSwitch)=> {
        //const newRegion = regionDetails.find((region)=>region.regionName === regionToSwitch);
        setTargetRegion({
                ...regionToSwitch,
                region:regionToSwitch.regionName, 
                provinceList:regionToSwitch.provinces
            });
    }
    return <div>
        <ProvinceNavBar gameDetails={regionDetails}/>
        <ProvinceContainer targetRegion={targetRegion} SwitchRegion={SwitchRegion}/>
    </div>
}