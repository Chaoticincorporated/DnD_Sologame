import ProvinceCard from "./ProvinceCard"

export default function ProvinceContainer({targetRegion, SwitchRegion}) {
    return <div>
        <h2>{targetRegion.region}</h2>
        {targetRegion.map((province)=>(
            <ProvinceCard
                provinces={province.provinceList}
                SwitchRegion={SwitchRegion}
            />
        ))}
    </div>
}