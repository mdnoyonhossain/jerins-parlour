import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { price, productName, email, _id } = booking;

    useEffect(() => {
        fetch("https://jerins-parlour-server-livid.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('jerinsToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message)
        } else {
            setCardError('')
        }

        setSuccess('');
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: productName,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return
        }

        if (paymentIntent.status === "succeeded") {
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }
            fetch('https://jerins-parlour-server-livid.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('jerinsToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                    }
                })
        }
        setProcessing(false)
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='w-50 my-4'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='primary-button text-white px-3 mt-3' style={{ float: 'right' }} disabled={!stripe || !clientSecret || processing}>Pay</button>
            </form>
            <p className='text-danger'>{cardError}</p>
            {
                success && <div>
                    <p className='text-success'>{success}</p>
                    <p className='fw-bold text-success'>Transaction ID: <span className='fw-semibold text-danger'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckOutForm;