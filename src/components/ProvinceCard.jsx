export default function ProvinceCard({regionName, provinces}) {
    return <div>
        <h2>{regionName}</h2>
        {provinces.map((province)=>(
            <p>{province.provinceName}</p>
        ))}
    </div>
}