import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import ShipCard from './ShipCard'

function Ships({commander}) {
    console.log(commander.id + " commander id from ships")
 const [ships, setShips] = useState([])
    useEffect(()=>{
        fetch("http://localhost:9292/ships")
        .then(r=>r.json())
        .then(data=>setShips(data))
    }, [])


    function addShip(e){
        e.preventDefault()
        let id = e.target.name
       fetch(`http://localhost:9292/ships/${id}/${commander.id}`, {
           method: "POST",
           headers: {"Content-type" : "Application/json"},
           body:JSON.stringify({id: id})
       })
       .then(r=>r.json())
       .then(data=>console.log(data))
    }
  return (
    <div>
        <NavBar/>
        Ships
       {ships.map(ship=> <form onSubmit={addShip} name={ship.id}> <ShipCard ship={ship} key={ship.id}/> <button type="submit">Add to ship</button>
        </form>)}
        </div>
  )
}

export default Ships