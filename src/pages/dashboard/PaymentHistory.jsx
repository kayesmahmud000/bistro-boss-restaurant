import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import PageHelmet from '../../shared/PageHelmet';
import SectionTitle from '../../shared/SectionTitle';
import { RiDeleteBin6Line } from 'react-icons/ri';

const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: payment=[] } = useQuery({
        queryKey: ["payment", user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/paymentHistory/${user.email}`)
            return res.data

        }
    })
    return (
        <div>
            <PageHelmet title={"Payment History"}></PageHelmet>
            <SectionTitle title={"Payment History"} subtitle={"Your Payment History"}></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Transaction Id</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Pay Time</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                payment.map((history, index) => <tr key={history._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                   
                                    <td>
                                        {history?.email}
                                    </td>
                                    <td>
                                     {
                                        history.transactionId
                                        
                                     }
                                  
                                       
                                    </td>
                                    <td>
                                        {history?.price}
                                    </td>
                                    <td>
                                        {history?.status}
                                    </td>
                                    <td>
                                        {history?.status}
                                    </td>
                                    <th>
                                        <button  className="btn bg-none text-red-600 btn-xs "><RiDeleteBin6Line size={20} /></button>
                                    </th>
                                </tr>)
                            }
                            {/* {
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
                        */}

                        </tbody>


                    </table>
                </div>

            </div>
        </div>
    );
};

export default PaymentHistory;