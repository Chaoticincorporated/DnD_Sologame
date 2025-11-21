import NpcCard from "./NpcCard"
export default function NpcContainer({npcList, createNpc, handleOnChange}){
return (
        <div>
            <h1><b>Create Npc</b></h1>
            <form onSubmit={createNpc}>
                <input type="text" id="name" name="name" onChange={handleOnChange}/> <br />
                <input type="text" id="race" name="race" onChange={handleOnChange}/> <br />
                <input type="submit" value="Submit"/>
            </form>
            {npcList.map((npc)=>(
                <NpcCard key={npc.id} name={npc.name} race={npc.race} gender={npc.gender} outlook={npc.outlook} traits={npc.traits} ambitions={npc.ambitions}/>
            ))}
        </div>
    )
}