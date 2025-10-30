export default function ProvinceNavBar({gameDetails, SwitchRegion}){

    const RegionSetter = () => {
        let region = gameDetails.find((region)=>region.regionName === document.getElementById("region").value);
        SwitchRegion(region);
    }

    return <div>
        <select id="region" name="region" onChange={()=>RegionSetter()}>
            <option value="" >Please select a region</option>
            {gameDetails.map((region)=>(
                <option value={region.regionName} >{region.regionName}</option>
            ))}
        </select>
    </div>
}