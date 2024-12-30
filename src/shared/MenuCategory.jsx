import Cover from "./Cover";
import MenuItem from "./MenuItem";


const MenuCategory = ({items, title, subtitle, coverImg}) => {
    return (
        <div className="my-16">
            {title && <Cover image={coverImg} title={title} subtitle={subtitle}></Cover>}
            <div  className='grid md:grid-cols-2  my-10 gap-10'>
                {
                    items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;