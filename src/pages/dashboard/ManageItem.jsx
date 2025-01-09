import React from 'react';
import PageHelmet from '../../shared/PageHelmet';
import SectionTitle from '../../shared/SectionTitle';
import useMenu from '../../hooks/useMenu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageItem = () => {
    const [menu, , refetch] = useMenu()
    const axiosSecure = useAxiosSecure()
    const handleUpdate = (item) => {
        // console.log(item)
    }
    const handleDeleteItem = (item) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/menu/${item._id}`)
                // console.log(res.data)
                if (res.data.deletedCount > 0) {

                    refetch()
                    toast.success(`${item.name} has been deleted`)

                }

            }
        })
    }
    return (
        <div>
            <PageHelmet title={"Items"}></PageHelmet>
            <div>
                <SectionTitle title={"Manage Item"} subtitle={"Hurry Up!"}></SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item Name</th>
                            <th>Item Image</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map((item, index) => <tr key={index}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt={item.name} />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}

                                </td>
                                <td>$ {item.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateItem/${item._id}`}><button onClick={() => handleUpdate(item)} className="btn bg-none text-red-600 btn-xs "><FaEdit size={20} /></button></Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteItem(item)} className="btn bg-none text-red-600 btn-xs "><RiDeleteBin6Line size={20} /></button>
                                </td>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItem;