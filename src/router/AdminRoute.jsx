import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user, loader}= useAuth()
    const[isAdmin, isPending]= useAdmin()
    const location= useLocation()
    if(loader || isPending){
        return <LoadingPage></LoadingPage>
    }
    if(user && isAdmin){
        return children
    }

    return <Navigate to={"/login"} state={{from: location}} replace></Navigate>
};

export default AdminRoute;