import React, { useState,useEffect ,useContext} from 'react'
import AuthContext from '../context/AuthContext'
import useAxios from '../utils/useAxios'
function Homepage() {
  let [notes,setnotes]=useState([])
  
  let {authtokens,logoutUser}=useContext(AuthContext)

  let api=useAxios()

  let getNotes=async ()=>{
    let response=await api.get('/api/notes/')
    if(response.status===200){
      setnotes(response.data)
    }
  
  }

  useEffect(()=>{
      getNotes()
  } , [authtokens])       //If user logs in: authtokens changes useEffect runs again notes reload automatically


  return (
    <div>
      <p>welcome to home page</p>

      <ul>
         {notes.map(note=>(
            <li key={note.id}>{note.body}</li>
         ))}
      </ul>
    </div>
  )
}

export default Homepage
