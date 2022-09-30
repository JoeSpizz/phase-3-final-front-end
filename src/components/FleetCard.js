import React, {useState, useEffect} from 'react'
import FleetShipDetails from './FleetShipDetails'

function FleetCard({fleet}) {
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
        .then(fetch(`http://localhost:9292/fleetShips/${fleet.id}`)
        .then(r=>r.json())
        .then(data=>setShips(data)))
}
  return (
    <div>
        <h2>{fleet.fleet_name}</h2>
        <h3> Win Percentage: fleet.wins / fleet.losses</h3>
        <div className='shipsOfTheFleet'>
        <p> SHIPS</p>
     {ships.map(ship=><h3>{ship.name}</h3>)}
        <h3> remaining budget: fleet.budget</h3>
        </div>
        <button type="button" name="fleetDeets" onClick={handleClick}>Fleet Details</button>
           {fleetDeets ? <FleetShipDetails fleet={ships} key={fleet.id} handleDelete={handleDelete}/> : null}
    </div>
  )
}

export default FleetCard