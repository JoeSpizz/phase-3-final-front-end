import React, {useEffect, useState} from 'react'
import FleetCard from './FleetCard'
import NavBar from './NavBar'


function Fleets({commander}) {
    const [fleet, setFleet] = useState([])
    // to get fleet array from DB. 
    console.log(commander.id)
useEffect(()=>{
    fetch(`http://localhost:9292/fleets/${commander.id}`)
    .then(r=>r.json())
    .then(data=>setFleet(data))
}, [commander.id])
console.log(fleet)
  
  return (
    <div>
        <h1 className='commanderIntro'> Welcome Commander {commander.name}</h1>
        <NavBar />
        <div className='commanderContainer'>
       <h2> Fleets You Command: {fleet.length} </h2>
       <h3> Win percentage: not coding this yet</h3>
       <p> In order to prove your worth to the galaxy at large it is up to you to assemble the best possible fleet or fleets. Indeed just one fleet is likely to be insufficient with the type of variety the galaxy can throw at you. Make sure to take into account Speed, Combat Power, Armor, Maneuverability, and of course your budget when selecting new starfighters. Good luck Commander {commander.name}</p>
        </div>
        {/* map fleet array */}
     {fleet.map(fleet=> <FleetCard fleet={fleet} key={fleet.id}/>)}
    </div>
  )
}

export default Fleets