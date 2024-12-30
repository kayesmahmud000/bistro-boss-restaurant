import React from 'react';
import Banner from '../components/Banner';
import OnlineOrder from '../components/OnlineOrder';
import PopularMenu from '../components/PopularMenu';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import PageHelmet from '../shared/PageHelmet';
import Cover from '../shared/Cover';
import img from '../assets/chef-service.jpg'

const HomePage = () => {
    return (
        <div>
            <PageHelmet title={'Home'}></PageHelmet>
            <section >
            <Banner></Banner>
            </section>
          
            <section className='my-10' >
                <OnlineOrder></OnlineOrder>
            </section>
            <section className='my-20' >
                <Cover image={img} title={"Bistro Boss"} subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'}></Cover>
            </section>
            <section className='my-10' >
                <PopularMenu></PopularMenu>
            </section>
            <section className='my-10' >
               <Featured></Featured>
            </section>
            <section className='my-10' >
               <Testimonials></Testimonials>
            </section>
          
        </div>
    );
};

export default HomePage;