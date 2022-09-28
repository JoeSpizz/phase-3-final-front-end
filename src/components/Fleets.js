import React from 'react'
import FleetCard from './FleetCard'
import NavBar from './NavBar'

function Fleets({commander}) {
    // to get fleet array
console.log(commander)

    let joe = {
        name : "Spizzandre",
        fleets : 5,
        battles : [
           { create_at : 1,
            outcome : "win"
        },
    {create_at : 2,
        outcome : "loss"}
    ]}
  return (
    <div>
        <h1 className='commanderIntro'> Welcome Commander {commander}</h1>
        <NavBar />
        <div className='commanderContainer'>
       <h2> Fleets You Command: {joe.fleets} </h2>
       <h3> Win percentage: not coding this yet</h3>
        </div>
        {/* map fleet array */}
        <FleetCard/>
        <FleetCard/>
        <FleetCard/>
    </div>
  )
}

export default Fleets