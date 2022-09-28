import React from 'react'
import FleetCard from './FleetCard'
import NavBar from './NavBar'


function Fleets({commander, newShip}) {
    // to get fleet array
   console.log(newShip)
  return (
    <div>
        <h1 className='commanderIntro'> Welcome Commander {commander}</h1>
        <NavBar />
        <div className='commanderContainer'>
       <h2> Fleets You Command: 0 </h2>
       <h3> Win percentage: not coding this yet</h3>
       <p> In order to prove your worth to the galaxy at large it is up to you to assemble the best possible fleet or fleets. Indeed just one fleet is likely to be insufficient with the type of variety the galaxy can throw at you. Make sure to take into account Speed, Combat Power, Armor, Maneuverability, and of course your budget when selecting new starfighters. Good luck Commander {commander}</p>
        </div>
        {/* map fleet array */}
     
        <FleetCard/>
        <FleetCard/>
    </div>
  )
}

export default Fleets