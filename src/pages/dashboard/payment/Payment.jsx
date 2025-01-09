import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../shared/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import PageHelmet from "../../../shared/PageHelmet";

// TODO: create stripe account and get publishable key

const stripePromise= loadStripe(import.meta.env.VITE_PAYMENT_KEY)

const Payment = () => {
    return (
        <div>
             <PageHelmet title={"Payment"}></PageHelmet>
         <SectionTitle title={"Payment"} subtitle={"Please pay to eat"}></SectionTitle>
         <div>
            <Elements stripe={stripePromise}>
                <CheckOutFrom></CheckOutFrom>
            </Elements>
            </div>   
        </div>
    );
};

export default Payment;