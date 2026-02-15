import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    let [loading,setloading]=useState(true)

    // Get tokens from localStorage
    const [authtokens, setauthtokens] = useState(() => localStorage.getItem("authtokens") ? JSON.parse(localStorage.getItem("authtokens")) : null);

    // Decode user from access token
    const [user, setUser] =useState(()=>localStorage.getItem("authtokens") ? jwtDecode(JSON.parse(localStorage.getItem("authtokens")).access): null);

    const loginUser = async (e) => {
        e.preventDefault();

        let response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: e.target.username.value, password: e.target.password.value}),
        });

        let data = await response.json();
        console.log(data)
        if (response.status === 200) {
        setauthtokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("authtokens", JSON.stringify(data));
        navigate("/");
        } else {
        alert("Login failed");
        }
    };

    let logoutUser=()=>{
        setauthtokens(null)
        setUser(null)
        localStorage.removeItem('authtokens')
        navigate('/login')
    }

    let updateToken=async ()=>{
        console.log('update token called');
        let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({'refresh':authtokens.refresh}),
        });

        let data = await response.json();
        if (response.status === 200) {
            setauthtokens(data);
            setUser(jwtDecode(data.access));
            localStorage.setItem("authtokens", JSON.stringify(data));
        } else {
            logoutUser()
        }
    }

    const contextData = {
        authtokens,
        user,
        loginUser,
        logoutUser,
    };

    useEffect(()=>{
        let interval=setInterval(()=>{
            if(authtokens){
                updateToken()
            }
        },2000)
        return ()=> clearInterval(interval)

    },[authtokens,loading])

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};
