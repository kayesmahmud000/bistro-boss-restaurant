import SectionTitle from "../shared/SectionTitle";
import img from '../assets/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className=" featured-item bg-fixed text-white pt-8 my-20">
            <div className="my-10">
                <SectionTitle title={'FROM OUR MENU'} subtitle={'---Check it out---'}></SectionTitle>
            </div>

            <div className="flex justify-center items-center pb-20 pt-12 bg-slate-500 bg-opacity-60 px-36">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="md:ml-10 space-y-3">
                    <p>March 20, 2023</p>
                    <h2 className="text-xl font-semibold">
                        WHERE CAN I GET SOME?
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className=" btn btn-outline border-0 mt-4 text-white border-b-white border-b-4">Read More</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;