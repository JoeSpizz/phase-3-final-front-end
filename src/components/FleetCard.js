import React, {useState, useEffect} from 'react'
import FleetShipDetails from './FleetShipDetails'
import { useNavigate } from 'react-router-dom'

function FleetCard({fleet, fleetDeleted, commander}) {
    const [ships, setShips] = useState([])
    const [fleetDeets, setfleetDeets] = useState(false)
    const [editFleet, setEditFleet] = useState(false)
    const [newName, setNewName]= useState(fleet.fleet_name)
    let navigate= useNavigate()
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
    let postDelete = ships.filter(ship=> ship.name !== data.name)
    console.log(postDelete)
    setShips(postDelete)
}

function deleteFleet(e){
    let fleetName = e.target.parentElement.id
   if(window.confirm("Deleting fleet "+ fleetName + " WARNING: This cannot be undone. Are you sure you want to continue?")){
    fetch(`http://localhost:9292/fleets/${fleetName}`,{
        method: "DELETE",})
        .then(r=>r.json())
        .then(data=>fleetDeleted(data))}
}
function editing(){
setEditFleet(!editFleet)
}
function creatingNewName(e){
    console.log(e.target.value)
    setNewName(e.target.value)
}
function newFleetName(e){
    e.preventDefault()
    // console.log(fleet.fleet_name + "becomes" + newName)
    fetch(`http://localhost:9292/fleets/${fleet.fleet_name}`,{
        method: "PATCH",
        headers:{"Content-type":"Application/json"},
        body:JSON.stringify({
            new_name : newName
        })
    })
    .then(r=>r.json())
    .then(data=>console.log(data))
    setEditFleet(!editFleet)
}

function toBattle(){
    navigate('/battles')
}
let fleetCost = ships.reduce((accumulator, object) => {
    return accumulator + parseInt(object.cost);}, 0)
    let cost = 1500000-fleetCost
    let commas = cost.toLocaleString("en-US"); 
    let budget = commas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
   

let powerArray = ships.map(ship=>{
    let totalPower = (parseInt(ship.atmoSpeed)/10) + ship.agility + ship.armor + ship.combatPower
    return totalPower
})
let fleetPower = powerArray.reduce((accumulator, object) => {
    return accumulator + object;}, 0)

    let winPercentage = (fleet.wins / (fleet.wins+fleet.losses))*100
  return (
    <div className='fleetCard' id={fleet.fleet_name}>
       {editFleet ? <div>
           <form>
               <button type="input" onClick={editing}>X</button>
               <input type="text" placeholder='New Fleet Name' onChange={creatingNewName}></input>
               <button type="submit" className='editBtn' onClick={newFleetName}>Submit</button>
               </form>
               </div>
               : 
               <div>
                   <h1>{newName}</h1> 
                    <button type="button" className='editBtn' onClick={editing}>Edit Fleet Name</button>
                    </div>
                    }
        <h2> Win Percentage: {winPercentage? `${winPercentage.toFixed(2)}%`: "No Battles Yet"}</h2>
        <h2>{`${fleet.wins+fleet.losses} battles completed`}</h2>
        <h2> Total Power: {fleetPower}</h2>
        <h3>Ships</h3>
        <button type="button" className="fleetBtn" onClick={handleClick}>Fleet Details</button>
        {fleetDeets? null : <div className='shipsOfTheFleet'>
     {ships.map(ship=><h3>{ship.name}</h3>)}
        </div>}
        <h3>Funds Remaining: {budget} Credits</h3>
        <div className="fleetBtn">
        </div>
        <div className='shipsOfTheFleet'>
           {fleetDeets ? ships.map(ship=> <FleetShipDetails ship={ship} key={fleet.name} handleDelete={handleDelete}/>): null}
           </div>
           <br></br>
           <button className='battleBtn' type='button' name="toBattle" onClick={toBattle}>TO BATTLE!</button>
           <br></br>
           <button className="deleteFleet" type="button" name="deleteFleet" onClick={deleteFleet}>Delete Fleet</button>
    </div>
  )
}

export default FleetCard