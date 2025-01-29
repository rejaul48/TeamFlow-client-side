
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext, useEffect, useState } from "react";
import CheckOutForm from "../../../../components/CheckOutForm/CheckOutForm";
import { TeamFlowContext } from "../../../../ContextApi/AuthContext";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PaymentPage = () => {
    const { currentUser } = useContext(TeamFlowContext);
    const [paymentUser, setPaymentUser] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const stripePromise = loadStripe(
        "pk_test_51Qiuv7FoTR2jMFulQHcNvM8P9AXk3JxCF6wSxZXBEx1GuWoioAuPfSdvAtLektYnmHgw6lcLwyki4FzcKxxJHMqM00I0eh5yNN"
    );

    const axiosSecure = useAxiosSecure()

    // Select a specific user from the list (default: first user)
    useEffect(() => {
        if (currentUser.length > 0) {
            setPaymentUser(currentUser); // Default to the first user in the array
        }
    }, [currentUser]);

    const paymentEmployeeFind = useLoaderData()
    const paymentEmployee = paymentEmployeeFind.data

    // Create a PaymentIntent when a user is selected
    useEffect(() => {
        if (paymentEmployee?.salary) {
            axiosSecure
                .post("/create-payment-intent", {
                    salary: paymentEmployee.salary,
                })
                .then((response) => {
                    setClientSecret(response.data.clientSecret);
                })
                .catch((error) => {
                    console.error("Error creating Payment Intent:", error);
                });
        }
    }, [paymentEmployee]);

    // Appearance settings for the Stripe Elements UI
    const appearance = { theme: "stripe" };
    const options = { clientSecret, appearance };

    // Render the payment form if a user and clientSecret are available
    return (
        <div>
            <div className="border-2 w-fit p-4 rounded-md mt-12">
                <h2 className="text-2xl font-bold">Payment for {paymentEmployee?.name || "User"}</h2>
                <p>Salary Amount: $ {paymentEmployee?.salary}</p>
            </div>
            {clientSecret ? (
                <div className="mt-24 border-2 w-10/12 md:w-6/12 mx-auto py-4 rounded-md bg-slate-100">
                    <Elements stripe={stripePromise} options={options}>
                        <CheckOutForm clientSecret={clientSecret} user={paymentEmployee} />
                    </Elements>
                </div>
            ) : (
                <p>Loading payment information...</p>
            )}
        </div>
    );
};

export default PaymentPage;
