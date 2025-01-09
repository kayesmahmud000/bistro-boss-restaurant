import Cover from "../shared/Cover";
import PageHelmet from "../shared/PageHelmet";
import ShopImg from "../assets/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../hooks/useMenu";
import FoodCard from "../components/FoodCard";
import { useParams } from "react-router-dom";



const OurShop = () => {
    
    const categories =["dessert","pizza", "salad", "soup", "drinks" ]
    const {category}= useParams()
    // console.log(category)
    const [menu]= useMenu()
    const initialIndex= categories.indexOf(category)
    // console.log(initialIndex)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const dessert= menu.filter(item=> item.category ==="dessert")
    const pizza= menu.filter(item=> item.category ==="pizza")
    const salad= menu.filter(item=> item.category ==="salad")
    const soup= menu.filter(item=> item.category ==="soup")
    const drinks= menu.filter(item=> item.category ==="drinks")

   
    
    return (
        <div>
            <PageHelmet title={"Our Shop"}></PageHelmet>

            <Cover image={ShopImg} title={'OUR SHOP'} subtitle={'Would you like to try a dish?'}></Cover>
            <div className="flex my-10 justify-center ">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab> DESSERTS</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab> SALAD</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab> DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                       <div className="grid my-5 grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 ">
                       {salad.map(item=><FoodCard key={item._id} item={item}></FoodCard>)}
                       </div>
                        </TabPanel>
                    <TabPanel>
                    <div className="grid grid-cols-1 my-5 gap-5 md:grid-cols-3 lg:grid-cols-4 ">
                       {pizza.map(item=><FoodCard key={item._id} item={item}></FoodCard>)}
                       </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid grid-cols-1 my-5 gap-5 md:grid-cols-3 lg:grid-cols-4 ">
                       {drinks.map(item=><FoodCard key={item._id} item={item}></FoodCard>)}
                       </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid grid-cols-1 my-5 gap-5 md:grid-cols-3 lg:grid-cols-4 ">
                       {soup.map(item=><FoodCard key={item._id} item={item}></FoodCard>)}
                       </div>
                    </TabPanel>
                    <TabPanel> <div className="grid grid-cols-1 my-5 gap-5 md:grid-cols-3 lg:grid-cols-4 ">
                       {dessert.map(item=><FoodCard key={item._id} item={item}></FoodCard>)}
                       </div></TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;