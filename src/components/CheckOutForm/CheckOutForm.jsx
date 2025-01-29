import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({ clientSecret, user }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const axiosSecure = useAxiosSecure()

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            console.error("Stripe.js has not loaded yet.");
            return;
        }

        setLoading(true);
        setError("");
        setSuccess("");

        const cardElement = elements.getElement(CardElement);

        try {
            const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                },
            });

            if (error) {
                setError(error.message);
                setLoading(false);
            } else if (paymentIntent.status === "succeeded") {
                const transactionId = paymentIntent.id;
                const paymentDate = new Date().toISOString(); // Use ISO string for accurate date handling

                console.log("Transaction ID:", transactionId);
                console.log("Payment Date:", paymentDate);

                setSuccess("Payment succeeded!");

                // Update backend with payment details
                axiosSecure
                    .patch(`/payroll/update-payment/${user?._id}`, {
                        // userId: ,
                        transactionID: transactionId,
                        paymentDate: paymentDate,
                    })
                    .then(( ) => {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Payment Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });


                        navigate('/dashboard/payroll')
                        
                    })
                    .catch((error) => {
                        console.error("Error updating payment status:", error);
                    });

                setLoading(false);
            }
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };


    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
            <h3 className="mb-5">Payment for {user?.name || "User"}</h3>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "20px", width: '100%' }}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    color: "#424770",
                                    "::placeholder": { color: "#aab7c4" },
                                },
                                invalid: { color: "#9e2146" },
                            },
                        }}
                    />
                </div>
                <button
                    type="submit"
                    disabled={!stripe || loading}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        background: "#5469d4",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: loading ? "not-allowed" : "pointer",
                    }}
                >
                    {loading ? "Processing..." : "Pay"}
                </button>
            </form>
            {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
            {success && <div style={{ color: "green", marginTop: "10px" }}>{success}</div>}
        </div>
    );
};

export default CheckOutForm;
