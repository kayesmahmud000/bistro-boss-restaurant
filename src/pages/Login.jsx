import React, { useContext, useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { authContext } from '../provider/AuthProvider';
import PageHelmet from '../shared/PageHelmet';
import toast from 'react-hot-toast';

const Login = () => {
    
    const [disable , setDisable]=useState(true)
    const { loginUser}=useContext(authContext)
    const navigate= useNavigate()
    const location= useLocation()
    const from= location.state?.from?.pathname || "/"
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin= e=>{
        e.preventDefault()
        const form= e.target
        const email= form.email.value
        const password= form.password.value
        console.log(email, password, )
        loginUser(email, password)
        .then(result=>{
           const  user = result.user
           console.log(user)
           navigate(from, {replace:true})
           toast.success('Successfully Logged!')
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const handleValidate =(e)=>{
        const captcha= e.target.value
        console.log(captcha)

        if(validateCaptcha(captcha)){
            setDisable(false)
        }else{
            setDisable(true)
        }
    }
    return (
       <>
        <PageHelmet title={'Login'}></PageHelmet>
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col justify-between  lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-1/2 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <div className='my-2'>
                            <LoadCanvasTemplate />
                            </div>
                           
                            <label className="label">
                                <span className="label-text">Reload Captcha</span>
                            </label>
                            <input onBlur={handleValidate} type="text" name='captcha' placeholder="type hare" className="input input-bordered" required />
                           

                        </div>
                        <div className="form-control flex justify-center mt-6">
                       
                        <input type="submit" disabled={disable} className="btn bg-[#D1A054] text-white" value="Login" />
                        </div>
                    </form>
                    <p className='text-center font-semibold text-[#D1A054] '>Don’t Have An Account ? <Link className=' underline' to={"/register"}> Register</Link></p>
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

export default Login;