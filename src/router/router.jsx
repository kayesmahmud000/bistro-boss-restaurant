import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import OurMenu from "../pages/OurMenu";
import OurShop from "../pages/OurShop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../layout/DashBoard";
import Cart from "../pages/dashboard/Cart";
import AllUsers from "../pages/dashboard/AllUsers";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<HomePage></HomePage>
        },
        {
            path:"/menu",
            element:<PrivateRoute><OurMenu></OurMenu></PrivateRoute>
        },
        {
            path:"/shop/:category",
            element:<OurShop></OurShop>
        },
        {
      
          path:"/login",
          element:<Login></Login>
        },
        {
      
          path:"/register",
          element:<Register></Register>
        }
       
      ],
        
    },
    {
      path:"/dashboard",
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        {
          path:"/dashboard/cart",
          element:<Cart></Cart>
        },

        // admin route
        {
          path:"/dashboard/allUsers",
          element:<AllUsers></AllUsers>
        }
      ]
    }
   
  ]);

  export default router