import { Children, createContext,useEffect,useState } from "react";
import { jwtDecode } from "jwt-decode";
const AuthContext=createContext();

export default AuthContext;

export const AuthProvider=({children})=>{
    const [user ,setUser] =useState(null)
    const [authtokens,setauthtokens]=useState(null)

    let loginUser=async (e)=>{
        e.preventDefault();

        let response= await fetch('http://127.0.0.1:8000/api/token/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data =await response.json()
        console.log(data)
        //console.log(response)
        if(response.status===200){
            setauthtokens(data)
            setUser(jwtDecode(data.access))
        }
        else{
            console.log("something went wrong")
        }
    }
      const contextData = {
        authtokens,
        user,
        loginUser,
        //logoutUser,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}