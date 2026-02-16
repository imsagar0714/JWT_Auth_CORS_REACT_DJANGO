import React, { useState,useEffect ,useContext} from 'react'
import AuthContext from '../context/AuthContext'

function Homepage() {
  let [notes,setnotes]=useState([])
  
  let {authtokens,logoutUser}=useContext(AuthContext)

  let getNotes=async ()=>{
    if (!authtokens) return
    let response=await fetch('http://127.0.0.1:8000/api/notes/',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + String(authtokens.access)
      }
    })
    let data= await response.json()
    if(response.status===200){
      setnotes(data)
    }
    else if(response.statusText==='Unauthorized'){
      logoutUser()
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
