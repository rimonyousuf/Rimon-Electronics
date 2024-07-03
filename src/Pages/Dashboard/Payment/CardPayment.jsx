import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../Utilities/useAxiosSecure";
import useCart from "../../../Utilities/useCart";
import { useNavigate } from "react-router-dom";

const CardPayment = () => {

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const { user } = useAuth();

    const stripe = useStripe();
    const elements = useElements();

    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const navigate = useNavigate();

    return (
        <div>
            
        </div>
    );
};

export default CardPayment;