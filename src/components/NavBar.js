import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    let activeLink = {
        color:"white",
      textDecoration: "wavy"
    }
  return (
    <div className="NavBar">
    <NavLink className="NavBarLink" to ="/Fleets" exact activestyle={activeLink}>
        Fleets
    </NavLink>
    <NavLink className="NavBarLink" to ="/ships" exact activestyle={activeLink}>
      All Ships
  </NavLink>
    <NavLink className="NavBarLink" to ="/battles" exact activestyle={activeLink}>
      Battles
      </NavLink>
</div>
  )
}

export default NavBar