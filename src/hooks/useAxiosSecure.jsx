import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import useMenu from "./useMenu";

 const axiosSecure= axios.create({
    baseURL : "https://bistro-boss-server-opal-three.vercel.app"

})
const useAxiosSecure = () => {
    const navigate= useNavigate()
    const {pathname} = useLocation()
    const { logout} =useAuth()
    
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem("access-token")
        // console.log(token)
        config.headers.authorization =` Bearer ${token}`
        return config
    }, function(error){
        return Promise.reject(error)

    } )

    axiosSecure.interceptors.response.use(response=>{
        return response
    }, async(error)=>{
        const status= error.response.status
        // console.log(status)

        if(status ===401 || status=== 403){
         
          if(pathname === "/dashboard/userHome" || pathname === "/dashboard/adminHome"  ){
            await logout()
            navigate('/login')
          }
        }
        return Promise.reject(error)
    })
    return axiosSecure
};

export default useAxiosSecure;