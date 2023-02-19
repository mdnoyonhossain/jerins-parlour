import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import strip from '../../../assets/icons/strip.png'
import paypal from '../../../assets/icons/paypal.png'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51M6tYtAEQWGdw2jky8YwFdchYtFd0wIZYirZ0zKZM2pcRnrCtKG10jv0SoI4RwOlWkws8rXijiMzBg5C3N4wwx2Q00njTZXAPs');

const PayBook = () => {
    const { register, handleSubmit } = useForm();
    const confirmationPayment = useLoaderData();
    const { productName } = confirmationPayment;
    const { user } = useContext(AuthContext);

    const handlePayment = data => {
        console.log(data);
    }

    return (
        <section>
            <form onSubmit={handleSubmit(handlePayment)} className="contactForm w-50">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group mb-3">
                            <input type="text" {...register('fullName')} className="form-control inputborder py-2" defaultValue={user?.displayName} disabled placeholder="Full Name" required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group mb-3">
                            <input type="email" {...register('email')} className="form-control inputborder py-2" defaultValue={user?.email} disabled placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group mb-3">
                            <input type="text" {...register('productName')} className="form-control inputborder py-2" defaultValue={productName} disabled placeholder="Service Name" required />
                        </div>
                    </div> 
                </div>
            </form>
            <Elements stripe={stripePromise}>
                <CheckOutForm
                    booking={confirmationPayment}
                />
            </Elements>
        </section>
    );
};

export default PayBook;