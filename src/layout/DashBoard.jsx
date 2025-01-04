import { FaCalendar,  FaSearch,  FaShoppingCart } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
import { IoHome } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="lg:flex justify-between  lg:gap-32">
            <div className="drawer w-64 lg:drawer-open">
               
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                   
                    <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden">
                        Dashboard
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                 
                    <ul className="menu bg-[#D1A054] text-base-content min-h-full w-64 p-4">
                        {/* Sidebar content here */}
                        <h2 className="text-xl font-bold mb-4"> Dashboard</h2>
                        <li><NavLink to={'/dashboard/userHome'}>
                        <IoHome size={20} />
                        User Home
                        </NavLink></li>
                        <li><NavLink to={'/dashboard/cart'}>
                        <FaShoppingCart size={20} />
                        Cart
                        </NavLink></li>

                        <li><NavLink to={'/dashboard/reservation'} >
                        <FaCalendar size={20} />
                        Reservation
                        </NavLink></li>
                        <li><NavLink  to={'/dashboard/review'} >
                        <FcRating size={20} />
                       Review
                        </NavLink></li>
                        <li><NavLink  to={'/dashboard/bookings'} >
                        <FaBookBookmark size={20} />
                       My Bookings
                        </NavLink></li>
                        <div className="divider"></div>
                        
                        <li><NavLink to={'/'}>
                        <IoHome size={20} />
                         Home
                        </NavLink></li>

                    <li><NavLink to={'/menu'}>
                        <FaSearch size={20} />
                         Menu
                        </NavLink></li>
                    
                    </ul>
                </div>
            </div>
            <div className="flex-1 my-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;