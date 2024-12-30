import React, { useEffect, useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import { RiDoubleQuotesL } from "react-icons/ri";

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("review.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='max-w-5xl mx-auto'>
            <div>
                <SectionTitle title={'TESTIMONIALS'} subtitle={"---What Our Clients Say---"}></SectionTitle>
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='text-center flex flex-col gap-3 items-center m-10'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <RiDoubleQuotesL size={48}  />
                            <p className='w-5/6 mx-auto'>{review.details}</p>
                            <h3 className='text-xl font-semibold text-[#CD9003]'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;