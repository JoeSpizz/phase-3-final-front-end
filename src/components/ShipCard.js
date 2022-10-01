import React from 'react'

function ShipCard({ship}) {
  
    let num = ship.cost
    let commas = num.toLocaleString("en-US"); 
    let cost = commas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 




  return (
    <div className='shipCard'>
       
        <h1 id={ship.id}>{ship.name}</h1>
   <img src={ship.url} alt={ship.name} />
    <ul className="shipStats">
        <li>{"Credits: "+cost}</li>
        <li>{"Atmospheric Speed: "+ship.atmoSpeed}</li>
        <li>{"Agility "+ship.agility}</li>
        <li>{"Weapons Power "+ ship.combatPower}</li>
        <li>{"Armor: " + ship.armor}</li>
        </ul>
        {/* in the future add a .Map of ship array to create select dropdown menu for add ship to specific ship */}
        </div>
  )
}

export default ShipCard