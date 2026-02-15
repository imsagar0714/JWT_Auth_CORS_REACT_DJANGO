import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
function Header() {
  let {user}=useContext(AuthContext)
  return (
    <div>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
         {user ? (
          <p>Logout</p>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>  
      {user && <p>Hello {user.username}</p>}
    </div>
  )
}

export default Header
