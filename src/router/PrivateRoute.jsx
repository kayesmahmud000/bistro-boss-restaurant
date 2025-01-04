import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingPage from "../pages/LoadingPage";


const PrivateRoute = ({children}) => {
    const {user, loader}= useAuth()
    const location= useLocation()
    if(loader){
        return <LoadingPage></LoadingPage>
    }
    if(user && user?.email){
        return children
    }

    return <Navigate to={"/login"} state={{from: location}} replace></Navigate>
};

export default PrivateRoute;