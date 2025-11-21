import PopCard from "./PopCard";
export default function PopAppPage({raceDetails}){
    return <div>
        {raceDetails.map((race)=>(
            <PopCard key={race.id} raceName={race.raceName} cultures={race.cultures}/>
        ))}
    </div>
}