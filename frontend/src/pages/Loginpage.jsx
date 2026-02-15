import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
function Loginpage() {
  let {loginUser}=useContext(AuthContext)
  return (
    <div>
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Username" />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Loginpage
