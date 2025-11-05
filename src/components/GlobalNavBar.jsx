export default function GlobalNavBar({ChangePage}){
    return <div>
        <button onClick={()=>ChangePage("home")}>Home</button>
        <button onClick={()=>ChangePage("regionPage")}>Regions</button>
        </div>
}