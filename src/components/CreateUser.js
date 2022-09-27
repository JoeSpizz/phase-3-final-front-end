import React from 'react'

function CreateUser() {
  return (
    <div>
        <form>
   <label for="createUser"><b>What should we call you, Commander? </b></label>
       <input type="text" placeholder='Desired Commander Name' required></input>
       <label for="pass"><b>Password? </b></label>
       <input type="password" placeholder='Enter Password' required></input>
       <br></br>
        <input type="submit" value="Create Profile"/>
 </form>
    </div>
  )
}

export default CreateUser