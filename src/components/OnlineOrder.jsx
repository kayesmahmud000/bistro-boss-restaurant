import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../shared/SectionTitle';
import img1 from '../assets/slide1.jpg'
import img2 from '../assets/slide2.jpg'
import img3 from '../assets/slide3.jpg'
import img4 from '../assets/slide4.jpg'
import img5 from '../assets/slide5.jpg'


const OnlineOrder = () => {
    return (
        <>
            <div className='my-5'>
                <SectionTitle title={'ORDER ONLINE'} subtitle={"---From 11:00am to 10:00pm---"}></SectionTitle>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper max-w-5xl mx-auto"
            >
                <SwiperSlide>
                    <img
                    src={img1}
                    alt="Shoes" />
                    <h2 className='text-center text-white lg:text-4xl uppercase shadow-black shadow-lg font-semibold -mt-16'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                    src={img2}
                    alt="Shoes" />
                    <h2 className='text-center text-white lg:text-4xl uppercase font-semibold -mt-16'>pizzas</h2>
                    </SwiperSlide>
                <SwiperSlide>
                    <img
                    src={img3}
                    alt="Shoes"
                    className='' />
                     <h2 className='text-center text-white lg:text-4xl uppercase font-semibold -mt-16'>Soups</h2>
                     </SwiperSlide>
                <SwiperSlide>
                    <img
                    src={img4}
                    alt="Shoes" />
                     <h2 className='text-center text-white lg:text-4xl uppercase font-semibold -mt-16'>desserts</h2>
                     </SwiperSlide>
                <SwiperSlide>
                    <img
                    src={img5}
                    alt="" />
                     <h2 className='text-center text-white lg:text-4xl uppercase font-semibold -mt-16'>Salads</h2>
                     </SwiperSlide>

            </Swiper>
        </>
    );
};

export default OnlineOrder;