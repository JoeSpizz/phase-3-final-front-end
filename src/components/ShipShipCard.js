import React, {useState, useEffect} from 'react'
import ShipCard from './ShipCard'

function ShipShipCard({ship, comm}) {
    const [fleets, setFleets]= useState([])
    const [select, setSelect] = useState("")
    useEffect(()=>{
        fetch(`http://localhost:9292/fleets/${comm}`)
        .then(r=>r.json())
        .then(data=>setFleets(data))
    }, [comm])
    let formFleets = fleets.map(fleet=> fleet.fleet_name)
    function handleChange(e){
       setSelect(e.target.value)
    }
    
    function addShip(e){
        e.preventDefault()
        let id = e.target.name
        if (select === ""){
            alert("Please select a fleet for this ship")
        }
        else
       fetch(`http://localhost:9292/ships/${id}/${comm}`, {
           method: "POST",
           headers: {"Content-type" : "Application/json"},
           body:JSON.stringify({fleet_name: select})
       })
       .then(r=>r.json())
       .then(data=>alert("Added ship to your fleet"))
    }
  return (
    <div className='shipsContainer'>
        <ShipCard ship={ship} key={ship.id}/> 
        <form onSubmit={addShip} name={ship.id}> 
        <label for="fleets" className="fullFleetBtn">Choose a fleet:</label>
<select name="fleets" id="fleetSelect" className="fullFleetBtn" onChange={handleChange}>
    <option value="Select a Fleet">Select a Fleet</option>
    {formFleets.map(fleet=>  <option value={fleet} >{fleet}</option>)}
</select>
        <input className="fullFleetBtn" type="submit"/>
    </form>
    </div>
  )
}

export default ShipShipCard