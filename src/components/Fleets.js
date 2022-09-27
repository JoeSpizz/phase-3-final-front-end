import React from 'react'

function Fleets() {
    let commander = {
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
        <h1> Welcome Commander {commander.name}</h1>
        <div className='commanderContainer'>
       <h2> Fleets You Command: {commander.fleets} </h2>
       <h3> Win percentage: not coding this yet</h3>
        </div>
    </div>
  )
}

export default Fleets