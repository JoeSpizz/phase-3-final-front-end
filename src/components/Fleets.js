import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import FleetCard from './FleetCard'
import NavBar from './NavBar'



function Fleets({commander}) {
    const [fleets, setFleet] = useState([])
    const [seeCreate, setSeeCreate] = useState(false)
    const [fleetName, setFleetName]=useState("")
    const navigate = useNavigate()
    // to get fleet array from DB. 
  function showCreate(){
      setSeeCreate(!seeCreate)
  }
useEffect(()=>{
    fetch(`http://localhost:9292/fleets/${commander.id}`)
    .then(r=>r.json())
    .then(data=>setFleet(data))
}, [commander.id])
function handleChange(e){
    let name = e.target.value
    setFleetName(name)
}
function createNewFleet(e){
    e.preventDefault()
   let name = fleetName
    let id = commander.id
    fetch(`http://localhost:9292/fleets/${name}/${id}`,{
        method: "POST",
        headers: {"Content-type" : "Application/json"},
        body:JSON.stringify({fleet_name: fleetName})
    })
    .then(r=>r.json())
    .then(data=>finalizeCreate(data))
}
function finalizeCreate(data){
    let newFleets = [[...fleets], data]
    setFleet(newFleets)
    alert("Fleet created, time to pick some ships. You have a budget of 1.5 Million Credits")
    navigate("/ships")
}

function fleetDeleted(data){
    let postDelete = fleets.filter(fleet=> fleet.fleet_name !== data.fleet_name)
    setFleet(postDelete)
}

 let wins = fleets.reduce((a, fleet)=> {
        return a + fleet.wins}, 0)
let losses = fleets.reduce((a, fleet)=>{
            return a + fleet.losses}, 0)
  
  return (
    <div>
        <h1 className='commanderIntro'> Welcome Commander {commander.name}</h1>
        <NavBar />
        <div className='commanderContainer'>
       <h2> Fleets You Command: {fleets.length} </h2>
       {wins || losses >0 ? <h2> Win percentage: {((wins / (wins+losses))*100).toFixed(2)} </h2> : null}
       <p> In order to prove your worth to the galaxy you must assemble the best possible fleet(or fleets). Indeed just one fleet is likely to be insufficient with the type of variety the galaxy can muster. Make sure to take into account Combat Power, Armor, Maneuverability, speed, and of course your budget when selecting new starfighters. You start with 1.5 Million Credits. <br></br>Good luck Commander {commander.name}</p>
       {seeCreate ?  <form onSubmit={createNewFleet}>
   <label for="createFleet"><b>Name your fleet, Commander </b></label>
       <input type="text" placeholder='Fleet Name' required onChange={handleChange}></input>
       <br></br>
        <input type="submit" value="Create Fleet"/>
 </form> :   <button type="button" onClick={showCreate}>Create New Fleet</button>}
        </div>
       <div className="fleetCardContainer">
     {fleets.map(fleet=> <FleetCard fleet={fleet} key={fleet.id} fleetDeleted={fleetDeleted} commander={commander}/>)}
     </div>
     <NavBar />
    </div>
  )
}

export default Fleets