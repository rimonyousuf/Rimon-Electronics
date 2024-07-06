import { useEffect } from "react";
import useAxiosSecure from "../../../Utilities/useAxiosSecure";
import useCart from "../../../Utilities/useCart";

const BkashPayment = () => {

    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(()=>{
        if(totalPrice>0){
            axiosSecure.post('/bkash/payment/create',{
                amount: totalPrice,
            })
        }
    },[axiosSecure,totalPrice])

    return (
        <div>
            <h1>Bkash</h1>
            <button className="btn btn-sm btn-secondary">Pay Bkash</button>
        </div>
    );
};

export default BkashPayment;