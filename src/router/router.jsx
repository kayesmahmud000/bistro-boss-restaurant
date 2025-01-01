import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import OurMenu from "../pages/OurMenu";
import OurShop from "../pages/OurShop";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
            element:<OurMenu></OurMenu>
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
   
  ]);

  export default router