import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";


const MainLayout = () => {
    const location =useLocation()
    const noHeaderFooter= location.pathname.includes('login') || location.pathname.includes('register')
    
    return (
        <div>

            <header>
               {noHeaderFooter|| <Navbar></Navbar> } 
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
               {noHeaderFooter|| <Footer></Footer>  } 
            </footer>
        </div>
    );
};

export default MainLayout;