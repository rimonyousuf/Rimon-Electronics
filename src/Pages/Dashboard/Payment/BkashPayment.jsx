import { useEffect } from "react";
import useAxiosSecure from "../../../Utilities/useAxiosSecure";
import useCart from "../../../Utilities/useCart";
import { useForm } from "react-hook-form";

const BkashPayment = () => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/bkash/payment/create', {
                amount: totalPrice,
            })
        }
    }, [axiosSecure, totalPrice])

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="w-1/3 mx-auto mt-10">
            <h1 className="text-center text-3xl text-pink-600 font-bold underline">Bkash Payment</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <input type="text" {...register("name", { required: true })} placeholder="Enter Your Name" className="input input-bordered" />
                    {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div className="form-control">
                    <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="input input-bordered" />
                    {errors.email && <span className="text-red-600">Email is required</span>}
                </div>
                <div className="form-control">
                    <input type="tel" {...register("number", { required: true })} placeholder="Your Bkash Number 01XXXXXXXXX" className="input input-bordered" />
                    {errors.number && <span className="text-red-600">number is required</span>}
                </div>
                <div className="form-control mt-0 w-1/2 mx-auto">
                    <input type="submit" className="btn btn-secondary" value="Pay Bkash" />
                </div>
            </form>
        </div>
    );
};

export default BkashPayment;