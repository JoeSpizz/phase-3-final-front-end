import React, {useState} from 'react'
import CreateUser from './CreateUser'


function Login({login}) {
    const [userForm, setUserForm] = useState(false)
    const [visibilityState, setvisibilityState] = useState("visible")
    const [name, setName] = useState ("")
    // const [password, setPassword]= useState("")
       // function changePass(e){
    //     setPassword(e.target.value)}
    function handleClick(){
        setUserForm(!userForm)
        if (visibilityState ==="visible"){
            setvisibilityState("hidden")
        }
        else {
            setvisibilityState("visible")
        } }
    function changeName(e){
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/users/${name}`)
        .then(r=>r.json())
        .then(data=>login(data))
    }
  return (
    <div>
        <h1>Star Wars Fleet Battler</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="star wars logo" height={"300px"}/>
   <form className='userLogin' style={{visibility: visibilityState}} onSubmit={handleSubmit}>
   <label for="uname"><b>Commander Name: </b></label>
       <input type="text" placeholder='Enter Username' required onChange={changeName} name="name"></input>
       {/* <label for="pass"><b>Password: </b></label>
       <input type="password" placeholder='Enter Password' required name="password" onChange={changePass}></input> */}
       <br></br>
        <input type="submit" value="Prepare to Battle"/>
 </form>

 <div id="createUser">
        <button value="Create User" onClick={handleClick} className="userButton">{userForm? "Login" : "Create User"}</button>
        {userForm ? <CreateUser />: null}
    </div>
    </div>
  )
}
export default Login

// star wars white background logo
// https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo.jpg