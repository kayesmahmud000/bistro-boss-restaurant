import React from 'react';
import PageHelmet from '../shared/PageHelmet';
import Cover from '../shared/Cover';
import img from '../assets/banner3.jpg'
import SectionTitle from '../shared/SectionTitle';
import useMenu from '../hooks/useMenu';
import MenuCategory from '../shared/MenuCategory';
import dessertImg from '../assets/dessert-bg.jpeg'
import pizzaImg from '../assets/pizza-bg.jpg'
import saladImg from '../assets/salad-bg.jpg'
import soupImg from '../assets/soup-bg.jpg'


const OurMenu = () => {
    const [menu]=useMenu()
    const dessert= menu.filter(item=> item.category ==="dessert")
    const pizza= menu.filter(item=> item.category ==="pizza")
    const salad= menu.filter(item=> item.category ==="salad")
    const soup= menu.filter(item=> item.category ==="soup")
    const offered= menu.filter(item=> item.category ==="offered")
    return (
        <div>
            <PageHelmet title={'Our Menu'}></PageHelmet>
         <Cover image={img} title={'OUR MENU'} subtitle={"Would you like to try a dish?"}></Cover>
         <SectionTitle title={"TODAY'S OFFER"} subtitle={"---Don't miss---"}></SectionTitle>
         <MenuCategory items={offered}></MenuCategory>
         <MenuCategory items={dessert} title={'dessert'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={dessertImg}></MenuCategory>
         <MenuCategory items={pizza} title={'pizza'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={pizzaImg}></MenuCategory>
         <MenuCategory items={salad} title={'salad'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={saladImg}></MenuCategory>
         <MenuCategory items={soup} title={'soup'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={soupImg}></MenuCategory>
         
        
        </div>
    );
};

export default OurMenu;