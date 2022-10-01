import React, {useState, useEffect} from 'react'
import ShipCard from './ShipCard'

function ShipShipCard({ship,addShip, comm}) {
    const [fleets, setFleets]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:9292/fleets/${comm}`)
        .then(r=>r.json())
        .then(data=>setFleets(data))
    }, [comm])
    let formFleets = fleets.map(fleet=> fleet.fleet_name)
    console.log(formFleets)
  return (
    <div className='shipsContainer'>
        <form onSubmit={addShip} name={ship.id}> 
        <ShipCard ship={ship} key={ship.id}/> 
        <label for="fleets" className="fullFleetBtn">Choose a fleet:</label>
<select name="fleets" id="fleets" form="fleetSelect" className="fullFleetBtn">
    {formFleets.map(fleet=>  <option value={fleet} >{fleet}</option>)}
</select>
        <button className="fullFleetBtn" type="submit">Add to Fleet</button>
    </form>
    </div>
  )
}

export default ShipShipCard