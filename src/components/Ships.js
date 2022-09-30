import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import ShipCard from './ShipCard'

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
  return (
    <div>
        <NavBar/>
        Ships
      <div className="shipsContainer">
       {ships.map(ship=> <form onSubmit={addShip} name={ship.id}> <ShipCard ship={ship} key={ship.id}/> <button type="submit">Add to Fleet</button>
        </form>)}
        </div>
        </div>
  )
}

export default Ships