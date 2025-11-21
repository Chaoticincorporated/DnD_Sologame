import ProvinceCard from "./ProvinceCard"
/*

{regionDetails.map((province)=>(
            
        ))}
*/
export default function ProvinceContainer({regionName, regionProvinces}) {
    return (<div>
        <h2>{regionName}</h2>
        {regionProvinces.map((province)=>(
            <ProvinceCard key={province.id} provinceDetails={province}/>
        ))}
    </div>);
}