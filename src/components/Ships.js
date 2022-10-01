import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import ShipShipCard from './ShipShipCard'

function Ships({commander}) {
    let comm = commander.id
  
 const [ships, setShips] = useState([])
    useEffect(()=>{
        fetch("http://localhost:9292/ships")
        .then(r=>r.json())
        .then(data=>setShips(data))
    }, [])
   
    function addShip(e){
        e.preventDefault()
        let id = e.target.name
       fetch(`http://localhost:9292/ships/${id}/${comm}`, {
           method: "POST",
           headers: {"Content-type" : "Application/json"},
           body:JSON.stringify({id: id})
       })
       .then(r=>r.json())
       .then(data=>alert("Added ship to your fleet"))
    }

    const displayedShips= ships.filter(ship=> ship.shipClass === "Starfighter")
  return (
    <div>
        <NavBar/>
      <div >
       {displayedShips.map(ship=> <ShipShipCard ship={ship} addShip={addShip} comm={comm}/>)}
        </div>
        </div>
  )
}

export default Ships