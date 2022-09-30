import React from 'react'

function ShipCard({ship}) {
  
    let num = ship.cost
    let commas = num.toLocaleString("en-US"); 
    let cost = commas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
   console.log(ship)



  return (
    <div className="shipCard">
       
        <h1 id={ship.id}>{ship.name}</h1>
    <p> image of ship.image</p>
    <ul className="shipStats">
        <li>{"Credits: "+cost}</li>
        <li>{"Class "+ship.shipClass}</li>
        <li>{"Atmospheric Speed: "+ship.atmoSpeed}</li>
        <li>ship.agility</li>
        <li>ship.power</li>
        <li>ship.armor</li>
        </ul>
        {/* in the future add a .Map of ship array to create select dropdown menu for add ship to specific ship */}
        </div>
  )
}

export default ShipCard