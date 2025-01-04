import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../provider/AuthProvider';
import { useForm } from "react-hook-form"
import PageHelmet from '../shared/PageHelmet';
import toast from 'react-hot-toast';

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      
    const {createUser}=useContext(authContext)
    const navigate= useNavigate()
    const onSubmit = (data) =>{

        createUser(data.email, data.password)
        .then(result=>{
            const user =result.user
            console.log(user)
            navigate("/")
            toast.success('Successfully Sign Up!')
        })
        .catch(err=>{
            console.log(err)
        })
    console.log(data)
    } 
    console.log(watch("example")) 
    // const handleRegister=e=>{

    //     e.preventDefault()
    //     const form = e.target
    //     const name =form.name.value
    //     const email =form.email.value
    //     const password =form.password.value
    //     createUser(email, password)
    //     .then(result=>{
    //         const user =result.user
    //         console.log(user)
    //         navigate("/")
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })


    // }
    return (
      <>
      <PageHelmet title={'Register'}></PageHelmet>
        <div className='hero min-h-screen'>
           <div className="hero-content flex-col justify-between  lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-1/2 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" {...register("name", { required: true })} name='name' className="input input-bordered"  />
                            {errors.name && <span className='text-red-400'> name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email" ,{ required: true })} name='email' className="input input-bordered"  />
                            {errors.email && <span className='text-red-400'> email required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' {...register("password" ,{ required: true, minLength:6, maxLength: 20  ,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z]).{1,}$/
                            })} placeholder="password" className="input input-bordered"  />
                            {errors.password?.type==='required' && <span className='text-red-400'>password required</span>}
                            {errors.password?.type=== "maxLength"&& <span className='text-red-400'>password  under 21 character</span> }
                            {errors.password?.type=== "minLength"&& <span className='text-red-400'>Password must be at least 6 character</span> }
                            {errors.password?.type=== "pattern"&& <span className='text-red-400'>Must have an Uppercase letter and Must have an Lowercase letter</span> }
                        </div>
                      
                        <div className="form-control flex justify-center mt-6">
                       
                        <input type="submit"  className="btn bg-[#D1A054] text-white" value="Register" />
                        </div>
                    </form>
                    <p className='text-center font-semibold text-[#D1A054] '>Already Have An Account ? <Link className=' underline' to={"/login"}>Login</Link></p>
                <div class="divider px-10 mb-4">OR</div>
                <div className='flex justify-center'>
                    <button  className=' btn border border-blue-400 bg-white hover:bg-[#A020F0] hover:text-white  my-5 mb-7'> <FcGoogle /> Continue With Google</button>
                </div>
                </div>
            </div>
        </div>
      </>
    );
};

export default Register;