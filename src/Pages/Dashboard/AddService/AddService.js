import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    useTitle('Add Service')

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?key=57fea7296aab6a4dfc6799dcc38e3a78`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const image = imageData.data.url;

                    const service = {
                        image: image,
                        productName: data.productName,
                        price: data.price,
                        productDescription: data.description
                    }

                    fetch('https://jerins-parlour-server-livid.vercel.app/services', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(service)
                    })
                    .then(res => res.json())
                    .then(result => {
                        if(result.acknowledged){
                            toast.success('Service Add Successful.');
                            navigate('/dashboard/manage-services')
                        }
                    })

                }
            })

    }

    return (
        <section className='order-list'>
            <form onSubmit={handleSubmit(handleAddProduct)} className='w-75'>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="form-group">
                            <label className='mb-1 fw-semibold'>Service Title</label>
                            <input type="text" {...register('productName')} className="form-control" placeholder='Enter Title' required />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className='mb-1 fw-semibold'>Price</label>
                            <input type="text" {...register('price')} className="form-control" placeholder='$00' required />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="form-label fw-semibold">Image</label>
                            <input type="file" {...register('image')} className="form-control form-control-sm" required />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-group mb-3">
                            <label className='mb-1 fw-semibold'>Description</label>
                            <textarea name="message" {...register('description')} className="form-control w-75" cols="30" rows="4" placeholder="Enter Designation" required></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <button type='submit' className='primary-button text-white px-4 py-1'>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AddService;