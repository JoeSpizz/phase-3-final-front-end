import React, {useState} from 'react'

function CreateUser() {
const [name, setName] = useState("")
function handleChange (e){
    setName(e.target.value)
}
    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/users/${name}`, {
            method: "POST",
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify({
                name: name
            })
        })
        .then(r=>r.json())
        .then(data=>welcomeCommander(data)) 
    }
function welcomeCommander(data){
    if (data !== "exists")
    alert(`Commander ${data.name} created. Please log in`)
    else
    alert("Commander already exists, please pick another name")
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
   <label for="createUser"><b>What should we call you, Commander? </b></label>
       <input type="text" placeholder='Desired Commander Name' required onChange={handleChange}></input>
       {/* <label for="pass"><b>Password? </b></label>
       <input type="password" placeholder='Enter Password' required></input> */}
       <br></br>
        <input type="submit" value="Create Profile"/>
 </form>
    </div>
  )
}

export default CreateUser