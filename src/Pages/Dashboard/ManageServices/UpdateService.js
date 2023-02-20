import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateService = () => {
    const updateService = useLoaderData();
    const { register, handleSubmit } = useForm();
    const { _id, price, productDescription, productName } = updateService;
    const navigate = useNavigate();

    const handleUpdateService = data => {
        const updateService = {
            productName: data.productName,
            price: data.price,
            productDescription: data.description
        }

        fetch(`https://jerins-parlour-server-livid.vercel.app/services/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateService)
        })
        .then(res => res.json())
        .then(serviceData => {
            if(serviceData.modifiedCount > 0){
                toast.success('Service Updated Done.');
                navigate('/dashboard/manage-services');
            }
        })
    }

    return (
        <section className='order-list'>
            <form onSubmit={handleSubmit(handleUpdateService)} className='w-75'>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="form-group">
                            <label className='mb-1 fw-semibold'>Update Title</label>
                            <input type="text" {...register('productName')} defaultValue={productName} className="form-control" placeholder='Enter Title' required />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className='mb-1 fw-semibold'>Update Price</label>
                            <input type="text" {...register('price')} defaultValue={price} className="form-control" placeholder='$00' required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group mb-3">
                            <label className='mb-1 fw-semibold'>Update Description</label>
                            <textarea name="message" {...register('description')} defaultValue={productDescription} className="form-control w-75" cols="30" rows="4" placeholder="Enter Designation" required></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <button type='submit' className='primary-button text-white px-4 py-1'>Update</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default UpdateService;