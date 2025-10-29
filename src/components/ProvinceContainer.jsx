import ProvinceCard from "./ProvinceCard"

export default function ProvinceContainer({gameDetails}) {
    return <div>
        {gameDetails.map((region)=>(
            <ProvinceCard
                regionName={region.regionName}
                provinces={region.provinces}
            />
        ))}
    </div>
}