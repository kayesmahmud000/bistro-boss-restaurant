import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import useMenu from '../hooks/useMenu';
import MenuItem from '../shared/MenuItem';

const PopularMenu = () => {
    const [menu]=useMenu()
    const popular= menu.filter(item=> item.category ==="popular")

    return (
        <div>
            <div>
                <SectionTitle title={'FROM OUR MENU'} subtitle={'---Check it out---'}></SectionTitle>
            </div>
            <div  className='grid md:grid-cols-2  my-10 gap-5'>
                {
                    popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
           <div className='flex justify-center'>
           <button className=" btn btn-outline border-0 mt-4 text-black border-b-black border-b-4">View Full  Menu</button>
           </div>
        </div>
    );
};

export default PopularMenu;