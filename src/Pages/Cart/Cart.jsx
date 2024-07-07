import Swal from "sweetalert2";
import useAxiosSecure from "../../Utilities/useAxiosSecure";
import useCart from "../../Utilities/useCart";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { CurrencyContext } from "../../hooks/CurrencyProvider";

const Cart = () => {

    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();

    const { currency } = useContext(CurrencyContext)

    const handleDelete = id => {
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
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const convertedTotal = currency === 'BDT' ? total * 112 : total;

    return (
        <div>
            <Helmet>
                <title>Rimon Electronics - Cart</title>
            </Helmet>
            <div className="flex justify-evenly mb-8 py-8">
                <h2 className="text-4xl">Items: {cart.length}</h2>
                <h2 className="text-4xl">Total: {currency === 'BDT' ? `৳${convertedTotal.toFixed(2)}` : `$${total.toFixed(2)}`}</h2>
                {cart.length ?
                    <Link to="/dashboard/payment">
                        <button className="btn btn-primary">Pay</button>
                    </Link>
                    :
                    <button disabled className="btn btn-primary">Pay</button>
                }
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{currency === 'BDT' ? `৳${(item.price * 112).toFixed(2)}` : `$${item.price.toFixed(2)}`}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;