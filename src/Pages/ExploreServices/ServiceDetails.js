import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const ServiceDetails = () => {
    const services = useLoaderData();
    const { image, price, productDescription, productName } = services;
    const { user } = useContext(AuthContext);
    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();
    const [isAdmin] = useAdmin(user?.email)

    const handleBooking = data => {
        const booking = {
            fullName: data.fullName,
            productName: data.productName,
            email: data.email,
            price: data.price,
            phone: data.productName,
            message: data.message,
            image: image,
            productDescription: productDescription
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`${productName} Booking Confirmd`);
                    navigate('/dashboard/book');
                }
            })
    }

    return (
        <section>
            <div className='p-5' style={{ background: '#FFF8F5' }}>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-5">
                            <h1 className='fw-bold mb-4' style={{ fontSize: '50px' }}>{productName}</h1>
                            <p>{productDescription}</p>
                        </div>
                        <div className="col-md-7">
                            <form onSubmit={handleSubmit(handleBooking)} className="contactForm w-75 m-auto">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <input type="text" {...register('fullName')} className="form-control inputborder" defaultValue={user?.displayName} readOnly placeholder="Full Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <input type="text" {...register('productName')} className="form-control inputborder" defaultValue={productName} readOnly placeholder="Product Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-5 mb-3">
                                        <div className="form-group">
                                            <input type="email" {...register('email')} className="form-control inputborder" defaultValue={user?.email} readOnly placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input type="tel" {...register('phoneNumber')} className="form-control inputborder" placeholder="Phone Number" required />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <input type="text" {...register('price')} className="form-control inputborder" defaultValue={price} readOnly placeholder="Price" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <textarea name="message" {...register('message')} className="form-control inputborder" cols="30" rows="4" placeholder="Your Message" required></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group text-center">
                                            <div className="d-grid gap-2">
                                                {user?.uid && !isAdmin ?
                                                    <button type='submit' className='primary-button text-white px-3 py-2 inputborder'>Booking</button>
                                                    :
                                                    <Link to='/login' className='text-decoration-none'><h6 className='text-danger'>Please User Account first then you can make <span className='text-success'>Booking</span></h6></Link>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row my-5'>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-8">
                                <h3 className='mb-4 text-danger'>{productName}</h3>
                                <p className='fw-bold'>{productDescription}</p>
                                <p className='fw-bold primary-color'>{price}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={image} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;