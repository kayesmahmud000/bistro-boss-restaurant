
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

import useCart from '../hooks/useCart';

const Navbar = () => {
    const { user, logout } = useAuth()
   const [cart]= useCart()
    // useEffect(()=>{
    //     axiosSecure.get("/carts")
    //     .then(res=>setCarts(res.data))
    // },[])
    const handleLogout=()=>{
        logout()
        .then(()=>{

            toast.success('Successfully Logout!')
        })
        .catch(err=>console.log(err))
    }

    console.log(user?.email)
    const navLink = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/menu'}> Our menu</NavLink></li>
        <li><NavLink to={'/shop/dessert'}> Our Shop</NavLink></li>

    </>
    return (
        <>
            <div className="navbar  fixed bg-opacity-30 z-10 text-white container mx-auto bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLink}
                        </ul>
                    </div>
                    <h1 className=" text-3xl font-bold">Bistro Boss</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <Link to={'/dashboard/cart'}>
                        <button className="flex ">
                            <FaShoppingCart size={20} />
                            <div className="badge -mt-1 badge-secondary text-xs">{cart.length}</div>
                        </button>
                    </Link>
                    {
                        user && user?.email ? <>
                         <button onClick={handleLogout} className='btn bg-red-400 text-white'> Logout</button>
                        </> : <>
                            <Link to={"/login"}>
                                <button className='btn bg-blue-400 text-white'> Login</button>
                            </Link>
                        </>
                    }


                </div>
            </div>
        </>
    );
};

export default Navbar;