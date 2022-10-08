import React from 'react'

function ShipCard({ship}) {
  
    let num = ship.cost
    let commas = num.toLocaleString("en-US"); 
    let cost = commas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 

    let totalPower = (parseInt(ship.atmoSpeed)/10) + ship.agility + ship.armor + ship.combatPower


  return (
    <div className='shipCard'>
       
        <h2 id={ship.id} className={"shipName"}>{ship.name}</h2>
   <img src={ship.url} alt={ship.name} />
    <ul className="shipStats">
        <li>{"Credits: "+cost}</li>
        <li>{"Atmospheric Speed: "+ship.atmoSpeed}</li>
        <li>{"Agility "+ship.agility}</li>
        <li>{"Weapons Power "+ ship.combatPower}</li>
        <li>{"Armor: " + ship.armor}</li>
        <li >{"Total Power: " + totalPower}</li>
        </ul>
        <br></br>
         </div>
  )
}

export default ShipCard