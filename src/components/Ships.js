import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import ShipCard from './ShipCard'

function Ships({addShip}) {
 const [ships, setShips] = useState([])
    useEffect(()=>{
        fetch("http://localhost:9292/ships")
        .then(r=>r.json())
        .then(data=>setShips(data))
    }, [])

  return (
    <div>
        <NavBar/>
        Ships
       {ships.map(ship=> <ShipCard ship={ship} key={ship.id} addShip={addShip}/>)}
        </div>
  )
}

export default Ships