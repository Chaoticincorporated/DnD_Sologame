export default function GlobalNavBar({ChangePage}){
    return <div>
        <button onClick={()=>ChangePage("home")}>Home</button>
        <button onClick={()=>ChangePage("regionPage")}>Regions</button>
        <button onClick={()=>ChangePage("racePage")}>Races</button>
        <button onClick={()=>ChangePage("npcPage")}>NPCs</button>
        </div>
}