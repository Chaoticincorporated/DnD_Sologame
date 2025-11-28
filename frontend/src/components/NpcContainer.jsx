import NpcCard from "./NpcCard"
export default function NpcContainer({npcList, newNpc, createNpc, handleOnChange}){
return (
        <div>
            <h1><b>Create Npc</b></h1>
            <form onSubmit={createNpc}>
                <input type="text" id="name" name="name" value={newNpc.name} onChange={handleOnChange} required/> <br />
                <input type="text" id="race" name="race" value={newNpc.race} onChange={handleOnChange} required/> <br />
                <input type="submit" value="Submit"/>
            </form>
            {npcList.map((npc)=>(
                <NpcCard key={npc.id} name={npc.name} race={npc.race} gender={npc.gender} outlook={npc.outlook} traits={npc.traits} ambitions={npc.ambitions}/>
            ))}
        </div>
    )
}