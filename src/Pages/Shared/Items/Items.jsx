import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Utilities/useAxiosSecure";
import useCart from "../../../Utilities/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useContext } from "react";
import { CurrencyContext } from "../../../hooks/CurrencyProvider";

const Items = ({ product }) => {

    const { name, image, category, price, description, _id } = product
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart()

    const { user } = useAuth()

    const { currency } = useContext(CurrencyContext);

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                itemId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add the item",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }

    const displayPrice = currency === 'BDT' ? `৳${(price * 112).toFixed(2)}` : `$${price.toFixed(2)}`;

    return (
        <div className="card bg-base-100 w-96 shadow-xl mt-4">
            <figure>
                <img style={{ width: "500px", height: "500px" }}
                    src={image} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center font-bold mt-4">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{displayPrice}</div>
                </div>
            </div>
            <button onClick={handleAddToCart} className="btn btn-outline btn-primary m-2">Add to Cart</button>
        </div>
    );
};

export default Items;