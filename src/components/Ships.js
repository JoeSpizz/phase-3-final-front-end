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

    const displayedShips= ships.filter(ship=> ship.shipClass === "Starfighter")
  return (
    <div>
        <NavBar/>
      <div >
       {displayedShips.map(ship=> <ShipShipCard ship={ship} comm={comm}/>)}
        </div>
        </div>
  )
}

export default Ships