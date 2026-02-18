import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from 'dayjs';

const baseURL='http://127.0.0.1:8000/';

let authtokens=localStorage.getItem("authtokens") ? JSON.parse(localStorage.getItem("authtokens")) : null

const axiosInstance=axios.create({
    baseURL,
    headers:{Authorization: `Bearer ${authtokens.access}`}
});

axiosInstance.interceptors.request.use(async req=>{
    if(!authtokens){
        authtokens=localStorage.getItem("authtokens") ? JSON.parse(localStorage.getItem("authtokens")) : null
        req.headers.Authorization=`Bearer ${authtokens?.access}`
    }

    const user=jwtDecode(authtokens.access)
    const isexpired=dayjs.unix(user.exp).diff(dayjs())<1;
    if(!isexpired) return req

    const response=await axios.post(`${baseURL}/api/token/refresh/`,{
        refresh:authtokens.refresh
    });

    localStorage.setItem('authtokens',JSON.stringify(response.data))
    req.headers.Authorization=`Bearer ${response.data.access}`
    return req
})

export default axiosInstance;