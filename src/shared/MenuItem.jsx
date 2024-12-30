import React from 'react';

const MenuItem = ({item}) => {
    const {image ,name,price, recipe}=item
    return (
        <div className='flex justify-between gap-5' >
            <img style={{borderRadius:"0px 200px 200px 200px"}} className='w-[100px]' src={image} alt="" />
            <div >
                <h2 className=' uppercase'>{name}</h2>
                <p>{recipe}</p>
            </div>
            <p className='text-[#BB8506] text-start'>${price}</p>
        </div>
    );
};

export default MenuItem;