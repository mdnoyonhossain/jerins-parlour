import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import strip from '../../../assets/icons/strip.png'
import paypal from '../../../assets/icons/paypal.png'

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
                            <input type="text" {...register('fullName')} className="form-control inputborder py-2" defaultValue={user?.displayName} placeholder="Full Name" required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group mb-3">
                            <input type="email" {...register('email')} className="form-control inputborder py-2" defaultValue={user?.email} placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group mb-3">
                            <input type="text" {...register('productName')} className="form-control inputborder py-2" defaultValue={productName} placeholder="Service Name" required />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-check">
                            <input className="form-check-input" {...register('srtip')} type="radio" name="payment" id="strip" value="Strip" checked />
                            <img src={strip} style={{width: '15px', marginRight: '5px'}} alt="" />
                            <label className="form-check-label" htmlFor="strip">Strip</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-check">
                            <input className="form-check-input" disabled type="radio" name="payment" id="paypal" value="Paypal" />
                            <img src={paypal} className='img-fluid' style={{width: '15px', marginRight: '5px'}} alt="" />
                            <label className="form-check-label" htmlFor="paypal">Paypal</label>
                        </div>
                    </div>

                    <div className="col-md-12 pt-3">
                        <div className="form-group mb-3">
                            <input type="text" {...register('cardNumber')} className="form-control inputborder py-2" placeholder="Card Number" required />
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-group">
                            <input type="text" {...register('date')} className="form-control inputborder" placeholder="MM/YY" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" {...register('cvc')} className="form-control inputborder" placeholder="CVC" required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button className='primary-button text-white py-1 px-3' style={{ float: 'right' }}>Pay</button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default PayBook;