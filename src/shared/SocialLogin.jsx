import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
const { googleLogin}= useAuth()
const axiosPublic =useAxiosPublic()
const navigate= useNavigate()

    const handleSocial=()=>{
        googleLogin()
        .then(result=>{
            // console.log(result.user)
            const userInfo= {
                name: result.user?.displayName,
                email :result.user?.email
            }
            axiosPublic.post("/users", userInfo)
            .then(res=>{
                // console.log(res.data)
                navigate("/")
            })
            
        })
        .catch(err=>{
            // console.log(err)
        })
    }
    return (
        <div>
              <div className='flex justify-center'>
                    <button onClick={handleSocial} className=' btn border border-blue-400 bg-white hover:bg-[#A020F0] hover:text-white  my-5 mb-7'> <FcGoogle /> Continue With Google</button>
                </div>
        </div>
    );
};

export default SocialLogin;