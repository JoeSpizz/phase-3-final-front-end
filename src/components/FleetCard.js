import React, {useState, useEffect} from 'react'
import FleetShipDetails from './FleetShipDetails'

function FleetCard({fleet, fleetDeleted}) {
    const [ships, setShips] = useState([])
    const [fleetDeets, setfleetDeets] = useState(false)
 
useEffect(()=>{
    fetch(`http://localhost:9292/fleetShips/${fleet.id}`)
    .then(r=>r.json())
    .then(data=>setShips(data))
}, [fleet.id])

function handleClick(){
setfleetDeets(!fleetDeets)
}
function handleDelete(e){
    let shipID= e.target.parentElement.firstChild.firstChild.id
    fetch(`http://localhost:9292/fleetShips/${fleet.id}/${shipID}`,{
        method: "DELETE",})
        .then(r=>r.json())
        .then(data=>finalizeDelete(data))
}
function finalizeDelete(data){
    fetch(`http://localhost:9292/fleetShips/${fleet.id}`)
    .then(r=>r.json())
    .then(data=>setShips(data))
    alert("Ship removed from fleet")
}

function deleteFleet(e){
    let fleetName = e.target.parentElement.id
   if(window.confirm("Deleting fleet "+ fleetName + " WARNING: This cannot be undone. Are you sure you want to continue?")){
    fetch(`http://localhost:9292/fleets/${fleetName}`,{
        method: "DELETE",})
        .then(r=>r.json())
        .then(data=>fleetDeleted(data))}
        
}
let fleetCost = ships.reduce((accumulator, object) => {
    return accumulator + parseInt(object.cost);}, 0)
    let cost = 2000000-fleetCost
    let commas = cost.toLocaleString("en-US"); 
    let budget = commas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
  return (
    <div className='fleetCard' id={fleet.fleet_name}>
        <h2>{fleet.fleet_name}</h2>
        <h3> Win Percentage: fleet.wins / fleet.losses</h3>
        {fleetDeets? null : <div className='shipsOfTheFleet'>
        <p> SHIPS</p>
     {ships.map(ship=><h3>{ship.name}</h3>)}
        </div>}
        <h3>Funds Remaining: {budget} Credits</h3>
        <div className="fleetBtn">
        <button type="button" name="fleetDeets" onClick={handleClick}>Fleet Details</button>
        </div>
        <div className='fleetContainer'>
           {fleetDeets ? ships.map(ship=> <FleetShipDetails ship={ship} key={fleet.name} handleDelete={handleDelete}/>): null}
           </div>
           <button className="fleetBtn" type="button" name="deleteFleet" onClick={deleteFleet}>Delete Fleet</button>
    </div>
  )
}

export default FleetCard