import { Link } from "react-router-dom";
import useProducts from "../../../Utilities/useProducts";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../Utilities/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {

    const [item, isLoading, refetch] = useProducts();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = pItem => {
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
                const res = await axiosSecure.delete(`/item/${pItem._id}`)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: `${pItem.name} has been deleted`,
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }
            }
        });
    }

    return (
        <div>
            <SectionTitle heading="manage all items" subHeading="Hurry Up"></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item.map((pItem, index) => <tr key={pItem._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={pItem.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{pItem.name}</td>
                                <td>${pItem.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateItem/${pItem._id}`}>
                                        <button
                                            className="btn btn-ghost btn-lg">
                                            <FaEdit className="text-orange-600"></FaEdit>
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteItem(pItem)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItems;