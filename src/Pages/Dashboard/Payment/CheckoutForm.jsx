import BkashPayment from "./BkashPayment";
import CardPayment from "./CardPayment";

const CheckoutForm = () => {
    return (
        <div>
            <CardPayment/>
            <BkashPayment/>
        </div>
    );
};

export default CheckoutForm;