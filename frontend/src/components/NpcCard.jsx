export default function NpcCard({
    name,
    race,
    gender,
    traits,
    outlook,
    ambitions
}){
    return <div>
        <h2>{name}</h2>
        <p>a {gender} {race}</p> 
        <p>Outlook: {outlook}</p>
        {traits.map((trait) =>(
            <p key={trait.traitName}>{trait.traitName}: intensity {trait.intensity}</p>
        ))}
        {ambitions.map((ambition) => (
            <p key={ambition}>{ambition}</p>
        ))}
    </div>
}