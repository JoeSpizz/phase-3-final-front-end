import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'

function Battles({commander}) {
    let comm = commander.id
    const [fleets, setFleets]= useState([])
    const [fleetChoice, setFleetChoice] = useState("")
    const [enemyFleetChoice, setEnemyFleetChoice] = useState("")
    const [commFleets, setCommFleets]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:9292/fleets`)
        .then(r=>r.json())
        .then(data=>setFleets(data))
    }, [])
    useEffect(()=>{
        fetch(`http://localhost:9292/fleets/${comm}`)
        .then(r=>r.json())
        .then(data=>setCommFleets(data))
    }, [comm])

    let yourFleets = commFleets.map(fleet=> fleet.fleet_name)
    let enemyFleets = fleets.map(fleet=> fleet.fleet_name)
    function yourFleet(e){
       setFleetChoice(e.target.value)
    }
    function enemyFleet(e){
        setEnemyFleetChoice(e.target.value)
     }

function battle(e){
    e.preventDefault()
    console.log(fleetChoice + " vs " + enemyFleetChoice + " on planet " + e.target.value)
    fetch(`http://localhost:9292/battle/${fleetChoice}/${enemyFleetChoice}/${e.target.value}`)
    .then(r=>r.json())
    .then(data=>console.log(data))
}


  return (
    <div>
        <NavBar/>
        <h1 className='battle'>Battles</h1>
        <form name="fleet_selection" className="battleFleet"> 
        <label for="battleChoice" className="battleChoice">Choose Your fleet:</label>
<select name="fleets" id="battle_fleetSelect" className="battleChoice" onChange={yourFleet}>
    <option value="Select a Fleet">Select a Fleet</option>
    {yourFleets.map(fleet=>  <option value={fleet} >{fleet}</option>)}
</select>
    </form>
    <form name="enemy_fleet_selection" className="battleFleet"> 
        <label for="enemy_battleChoice" className="battleChoice">Choose Fleet to Battle Against:</label>
<select name="enemy_fleets" id="enemy_fleetSelect" className="battleChoice" onChange={enemyFleet}>
    <option value="Select a Fleet">Select an Enemy Fleet</option>
    {enemyFleets.map(fleet=>  <option value={fleet} >{fleet}</option>)}
</select>
    </form>
        <div className="planet">
            <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/08/star-wars-empire-strikes-back-hoth-ion-canon-echo-base-Edited.jpg" alt="Hoth"/>
            <h3>Hoth: The Ice Planet<br></br>Commander, the environment here can be as dangerous as our enemy. It's so cold our maintanence crews spend most of their time repairing the hulls of our suddenly brittle starfighters. Shields and armor will be less effective in these frigid temperatures, but if we're able to keep the ships in good condition, agility could be the edge.</h3>
            <button onClick={battle} type="input" value="Hoth">BATTLE</button>
        </div>
        <div className="planet">
            <img src="https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/afe98436-e202-4f65-8340-969044b20e1e/2753738.jpg" alt="Tattoine"/>
            <h3>Tattoine: The Desert Planet<br></br>
            Commander, brutal heat and endless sand dunes await us. Agility doesn't mean nearly as much when you can see the enemy has clear lines of sight regardless. The sand gets into every gear and gunks them up anyway. Just make sure to reinforce the armor of the fleet before sending them into battle, we're guaranteed to take quite a few hits.</h3>
            <button onClick={battle} type="input" value="Tattoine">BATTLE</button>
        </div>
        <div className="planet">
            <img src="https://lumiere-a.akamaihd.net/v1/images/databank_mustafar_01_169_5b470758.jpeg?region=0%2C0%2C1560%2C878&width=960" alt="Mustafar"/>
            <h3>Mustafar: The Fire Planet<br></br>There is something different about this planet, Commander. Every battle here is a nasty, bloody fight with heavy losses on both sides. Pilots report feeling sluggish, but that their weapons feel like they've been over-clocked by the best engineers on Corellia. Make sure we have the firepower to survive before heading here.</h3>
            <button onClick={battle} type="input" value="Mustafar">BATTLE</button>
        </div>
        <div className="planet">
            <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/02/Star-Wars-Coruscant.jpg" alt="Coruscant"/>
            <h3>Coruscant: The City Planet<br></br>Commander I have to admit this battle is one I'd rather not have to engage in. No matter how we fare, the population will suffer and likely blame us. We'll have to balance keeping collateral damage to a minimum, meaning bringing less of our weapons to bare. We'll have to make up for that lack with better agility and shielding than our enemy. Good Luck, Commander.</h3>
            <button onClick={battle} type="input" value="Coruscant">BATTLE</button>
        </div>
        
        </div>
  )
}

export default Battles