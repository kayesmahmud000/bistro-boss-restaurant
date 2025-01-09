import { FaBook, FaCalendar,  FaEnvelope,  FaList,  FaSearch,  FaShoppingCart,  FaUsers, FaUtensils } from "react-icons/fa";
import { FaBagShopping, FaBookBookmark } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
import { IoHome } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import PageHelmet from "../shared/PageHelmet";



const DashBoard = () => {
    const [cart]= useCart()
    const [isAdmin]= useAdmin()
    console.log(isAdmin)
    // const isAdmin= true
    return (
        <div className="lg:flex justify-between  lg:gap-32">
            <PageHelmet title={"Dashboard"}></PageHelmet>
            <div className="drawer w-64 lg:drawer-open">
               
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                   
                   
                    <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden">
                        Dashboard
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                 
                    <ul className="menu bg-[#D1A054] text-base-content min-h-full w-64 p-4">
                        {/* Sidebar content here */}
                        {/* dashboard */}
                        <h2 className="text-xl font-bold mb-4"> Dashboard</h2>
                        {
                            isAdmin ?<>
                            <li><NavLink to={'/dashboard/adminHome'}>
                        <IoHome size={20} />
                       Admin Home
                        </NavLink></li>
                        <li><NavLink to={'/dashboard/addItem'}>
                        <FaUtensils size={20} />
                        Add Items
                        </NavLink></li>

                        <li><NavLink to={'/dashboard/manageItems'} >
                        <FaList size={20} />
                       Manage Items
                        </NavLink></li>
                        <li><NavLink  to={'/dashboard/manageBookings'} >
                        <FaBook size={20} />
                      Manage Bookings
                        </NavLink></li>
                        <li><NavLink  to={'/dashboard/allUsers'} >
                        <FaUsers size={20} />
                      All Users
                        </NavLink></li>
                            </>:<>
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
                        <li><NavLink  to={'/dashboard/paymentHistory'} >
                        <FaBookBookmark size={20} />
                       Payment History
                        </NavLink></li>
                            </>
                        }

                        {/* shared  */}
                        <div className="divider"></div>
                        
                        <li><NavLink to={'/'}>
                        <IoHome size={20} />
                         Home
                        </NavLink></li>

                    <li><NavLink to={'/menu'}>
                        <FaSearch size={20} />
                         Menu
                        </NavLink></li>
                    <li><NavLink to={'/shop/dessert'}>
                        <FaBagShopping size={20} />
                         Shop
                        </NavLink></li>

                    <li><NavLink to={'/contact'}>
                        <FaEnvelope size={20} />
                         Contact
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