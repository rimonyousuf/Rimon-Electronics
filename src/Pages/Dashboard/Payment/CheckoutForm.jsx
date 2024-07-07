import { useContext } from "react";
import BkashPayment from "./BkashPayment";
import CardPayment from "./CardPayment";
import { CurrencyContext } from "../../../hooks/CurrencyProvider";

const CheckoutForm = () => {

    const { currency } = useContext(CurrencyContext)

    return (
        <div>
            <CardPayment />
            {currency === 'BDT' && <BkashPayment />}
        </div>
    );
};

export default CheckoutForm;