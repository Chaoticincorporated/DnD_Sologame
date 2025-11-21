import CultureCard from "./CultureCard"
export default function PopCard({raceName, cultures}){
    return (
        <div>
            <h2>{raceName}</h2>
            {cultures.map((culture)=>(
                <CultureCard key={culture.id} cultureName={culture.cultureName} details={culture.details}/>
            ))}
        </div>
    )
}