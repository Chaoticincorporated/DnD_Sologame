export default function ProvinceCard({provinceDetails}) {
    return <div>
        <h3>{provinceDetails.provinceName}</h3>
        <p>Ruler: {provinceDetails.ruler}</p>
        <p>Population: {provinceDetails.totalPops}</p>
    </div>
}