export default function ProvinceNavBar({gameDetails, SwitchRegion}){

    return (
        <div>
        <select id="region" name="region" onChange={()=>SwitchRegion(gameDetails.find((region)=>region.regionName === document.getElementById("region").value))}>
            <option value="" >Please select a region</option>
            {gameDetails.map((region)=>(
                <option value={region.regionName} key={region.regionName}>{region.regionName}</option>
            ))}
        </select>
    </div>
    );
}