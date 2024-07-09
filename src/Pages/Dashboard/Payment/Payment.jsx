import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Payment)
const Payment = () => {
    return (
        <div>
            <Helmet>
                <title>Rimon Electronics - Payment</title>
            </Helmet>
            <SectionTitle heading="payment" subHeading="Pay to buy"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;