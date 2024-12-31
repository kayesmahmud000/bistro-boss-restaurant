import React from 'react';

const FoodCard = ({ item}) => {
    const {image ,name,price, recipe}=item
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
                    <button className=" btn btn-outline border-0 mt-4 text-[#BB8506] border-b-[#BB8506] border-b-4 uppercase hover:text-[#BB8506]">add to cart</button>
                       
                    </div>
                </div>
                <p className=' absolute right-4 font-semibold  bg-gray-800 p-1 text-white top-3'>${price}</p>
            </div>
        </div>
    );
};

export default FoodCard;