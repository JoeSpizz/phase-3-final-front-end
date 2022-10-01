import React, {useEffect, useState} from 'react'
import FleetCard from './FleetCard'
import NavBar from './NavBar'


function Fleets({commander}) {
    const [fleet, setFleet] = useState([])
    const [seeCreate, setSeeCreate] = useState(false)
    const [fleetName, setFleetName]=useState("")
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
    .then(data=>setFleet([...fleet], data))
    alert("Fleet created")
}

  
  return (
    <div>
        <h1 className='commanderIntro'> Welcome Commander {commander.name}</h1>
        <NavBar />
        <div className='commanderContainer'>
       <h2> Fleets You Command: {fleet.length} </h2>
       <h3> Win percentage: not coding this yet</h3>
       <p> In order to prove your worth to the galaxy at large it is up to you to assemble the best possible fleet or fleets. Indeed just one fleet is likely to be insufficient with the type of variety the galaxy can throw at you. Make sure to take into account Speed, Combat Power, Armor, Maneuverability, and of course your budget when selecting new starfighters. Good luck Commander {commander.name}</p>
       <button type="button" onClick={showCreate}>Create New Fleet</button>
       {seeCreate ?  <form onSubmit={createNewFleet}>
   <label for="createFleet"><b>Name your fleet, Commander </b></label>
       <input type="text" placeholder='Fleet Name' required onChange={handleChange}></input>
       <br></br>
        <input type="submit" value="Create Fleet"/>
 </form> : null}
        </div>
        {/* map fleet array */}
     {fleet.map(fleet=> <FleetCard fleet={fleet} key={fleet.id}/>)}
    </div>
  )
}

export default Fleets