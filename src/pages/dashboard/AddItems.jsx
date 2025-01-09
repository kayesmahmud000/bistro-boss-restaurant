import React from 'react';
import PageHelmet from '../../shared/PageHelmet';
import SectionTitle from '../../shared/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';


const imageKey= import.meta.env.VITE_IMAGE_HOSTING_KEY
const imageApi= `https://api.imgbb.com/1/upload?key=${imageKey}`
const AddItems = () => {
    const axiosPublic= useAxiosPublic()
    const axiosSecure= useAxiosSecure()
    const { register, handleSubmit,reset } = useForm()
    const onSubmit = async(data) => {
        // console.log(data)
        const imageFile={image: data.image[0]} 
        const res= await axiosPublic.post(imageApi, imageFile, {
            headers: {'content-type':'multipart/form-data'}
        })
       
        if(res.data.success){
            const menuItem = {
                name: data.name,
                category:data.category,
                price: parseFloat(data.price),
                recipe:data.details,
                image: res.data.data.display_url
            }
            const menuRes= await axiosSecure.post('/menu', menuItem)
            // console.log(menuRes.data)
            if(menuRes.data.insertedId){
                toast.success(`${data.name} is add the menu list`)
                reset()
            }

        }

    }

    return (
        <div>
            <PageHelmet title={"Add Item"}></PageHelmet>
            <div>
                <SectionTitle title={"Add Item"} subtitle={"What's new?"}></SectionTitle>
            </div>
            <div>
                <div className="= ">
                    <div className=" ">

                        <div className="card   shadow-2xl">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Recipe name*</span>
                                    </label>
                                    <input type="text" placeholder="Recipe name" {...register("name", { required: true })} name='name' className="input input-bordered" />

                                </div>
                                <div className="form-control lg:flex-row gap-5">
                                    <div className='w-1/2'>
                                        <label className="label">
                                            <span className="label-text">Category*</span>
                                        </label>
                                        <select defaultValue={"Category"} {...register("category")} className="input w-full input-bordered" >
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
                                        <input type="number" {...register("price", { required: true })} name='price' placeholder="Price" className="input w-full input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Recipe Details*</span>
                                    </label>
                                    <textarea rows={5} cols={5} {...register("details", { required: true })} className="textarea textarea-bordered" placeholder="Recipe Details"></textarea>
                                </div>
                                <div className="form-control mt-5">
                                    <input type="file" {...register("image", { required: true })}  name="image" className='file-input w-full max-w-xs' id="" />
                                </div>

                                <div className="form-control   mt-6">

                                    <input type="submit" className="btn bg-[#D1A054] text-white" value="Add Item" />
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItems;