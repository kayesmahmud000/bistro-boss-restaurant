import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import OurMenu from "../pages/OurMenu";

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
      ]
    },
  ]);

  export default router