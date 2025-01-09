import { useLoaderData } from "react-router-dom";
import PageHelmet from "../../shared/PageHelmet";
import SectionTitle from "../../shared/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";


const UpdateItem = () => {

    const { name, category,
        recipe, price, _id } = useLoaderData()
const axiosSecure =useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async(data )=> {
        const menuItem = {
            name: data.name,
            category:data.category,
            price: parseFloat(data.price),
            recipe:data.details,
           
        }
        const menuRes= await axiosSecure.patch(`/menu/${_id}`, menuItem)
        console.log(menuRes.data)
        if(menuRes.data.modifiedCount){
            toastn.success(`${data.name} is updated the menu list`)
            reset()
        }
    }

    return (
        <div>
            <PageHelmet title={'Update Item'}></PageHelmet>
            <SectionTitle title={'Update Item'} subtitle={"your item"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input type="text" defaultValue={name} placeholder="Recipe name" {...register("name", { required: true })} name='name' className="input input-bordered" />

                    </div>
                    <div className="form-control lg:flex-row gap-5">
                        <div className='w-1/2'>
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register("category")} className="input w-full input-bordered" >
                                <option disabled value='Category'>Category</option>
                                <option value="dessert">Dessert</option>
                                <option value="pizza">Pizza</option>
                                <option value="salad">Salad</option>
                                <option value="soup">Soup</option>
                            </select>
                        </div>
                        <div className='w-1/2'>
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="number" defaultValue={price} {...register("price", { required: true })} name='price' placeholder="Price" className="input w-full input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea rows={5} cols={5} {...register("details", { required: true })} className="textarea textarea-bordered" defaultValue={
                            recipe} placeholder="Recipe Details"></textarea>
                    </div>


                    <div className="form-control   mt-6">

                        <input type="submit" className="btn bg-[#D1A054] text-white" value="Update" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;