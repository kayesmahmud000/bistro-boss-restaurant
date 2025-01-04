import React from 'react';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCart from '../hooks/useCart';



const FoodCard = ({ item}) => {
    const {image ,name,price, recipe, _id}=item
    const {user}= useAuth()
    const location = useLocation()
    const navigate= useNavigate() 
    const axiosSecure = useAxiosSecure()
    const [, refetch]=useCart()

    const handleAddCart=()=>{
      
        if(user && user?.email){
            const foodItem= {
                foodId : _id,
                email : user.email,
                name,
                price,
                image
            }
       axiosSecure.post("/carts", foodItem)
            .then(res=> {
                
                if(res.data.insertedId){
                    Swal.fire({
                      position:"top-end",
                        icon: "success",
                        title: `${name } added successfully`,
                        showCancelButton: false,
                       timer: 1500
                      }) 
                      refetch()
                }
            })
        }else{
            Swal.fire({
                title: "You are not Logged in",
                text: "Please login to add the card",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/login" , {state: {from :location}})
                }
              });
        }
    }
    return (
        <div>
            <div className="card relative h-[500px] bg-slate-50  shadow-xl">
                <figure className="">
                    <img
                        src={image}
                        alt="Food"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                    <button onClick={handleAddCart} className=" btn btn-outline border-0 mt-4 text-[#BB8506] border-b-[#BB8506] border-b-4 uppercase hover:text-[#BB8506]">add to cart</button>
                       
                    </div>
                </div>
                <p className=' absolute right-4 font-semibold  bg-gray-800 p-1 text-white top-3'>${price}</p>
            </div>
        </div>
    );
};

export default FoodCard;