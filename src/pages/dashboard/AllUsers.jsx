import React, { useEffect } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {  FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';


const AllUsers = () => {
    const axiosSecure =useAxiosSecure()
    const {  data :users =[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
         const res= await   axiosSecure.get("/users")
         return res.data
        }
         
      })

      const handleDeleteUser=(user)=>{
          Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
        
                        axiosSecure.delete(`/users/${user._id}`)
                            .then(res => {
                                console.log(res.data)
                                if (res.data.deletedCount > 0) {
                                    refetch()
                                      Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                      });
                                }
                            })
                    }
                });
      }

      const  handleMakeAdmin =user=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            refetch()
            if(res.data.modifiedCount>0){
                toast.success(`${user.name} is an admin now!`)
            }
        })
      }
   

    useEffect
    return (
         <div>
                   <div className='flex justify-between'>
                       
                       <h2 className='text-2xl font-bold'>Total Users :{users.length} </h2>
                      
                   </div>
                   <div>
                       <div className="overflow-x-auto">
                           <table className="table w-full">
                               {/* head */}
                               <thead>
                                   <tr>
                                       <th></th>
                                       <th>Name</th>
                                       <th>Email</th>
                                       <th>Role</th>
                                       <th>Action</th>
       
                                   </tr>
                               </thead>
                               <tbody>
                                   {
                                       users.map((user, index) => <tr key={user._id}>
                                           <th>
                                               {index + 1}
                                           </th>
                                           <td>
                                               <div className="flex users-center gap-3">
                                                   <div className="avatar">
                                                    {user?.name}
                                                   </div>
       
                                               </div>
                                           </td>
                                           <td>
                                               {user?.email}
                                           </td>
                                           <td>
                                            {
                                                user?.role === 'admin'? "Admin":  <button onClick={() => handleMakeAdmin(user)} className="btn bg-none text-red-600 btn-xs "><FaUsers size={20}></FaUsers></button>
                                            }
                                         
                                              
                                           </td>
       
                                           <th>
                                               <button onClick={() => handleDeleteUser(user)} className="btn bg-none text-red-600 btn-xs "><RiDeleteBin6Line size={20} /></button>
                                           </th>
                                       </tr>)
                                   }
       
       
                               </tbody>
       
       
                           </table>
                       </div>
                   </div>
               </div>
    );
};

export default AllUsers;