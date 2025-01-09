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
import AddItems from "../pages/dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/dashboard/ManageItem";
import UpdateItem from "../pages/dashboard/UpdateItem";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/PaymentHistory";
import AdminHome from "../pages/dashboard/AdminHome";
import UserHome from "../pages/dashboard/UserHome";

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
        // normal route
        {
          path:"/dashboard/userHome",
          element:<UserHome></UserHome>
        },
        {
          path:"/dashboard/cart",
          element:<Cart></Cart>
        },
        {
          path:"/dashboard/payment",
          element:<Payment></Payment>
        },
        {
          path:"/dashboard/paymentHistory",
          element:<PaymentHistory></PaymentHistory>
        },

        // admin route
        {

          path:"/dashboard/adminHome",
          // element:<AddItems></AddItems>
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>

        },
        {

          path:"/dashboard/addItem",
          // element:<AddItems></AddItems>
          element:<AdminRoute><AddItems></AddItems></AdminRoute>

        },
        {

          path:"/dashboard/manageItems",
          element:<AdminRoute><ManageItem></ManageItem></AdminRoute>

        },
        {

          path:"/dashboard/updateItem/:id",
          element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params})=>fetch(`https://bistro-boss-server-opal-three.vercel.app/menu/${params.id}`)

        },
        {
          path:"/dashboard/allUsers",
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
   
  ]);

  export default router