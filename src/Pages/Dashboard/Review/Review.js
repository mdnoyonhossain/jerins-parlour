import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Review = () => {
    const { handleSubmit, register } = useForm();
    const { user } = useContext(AuthContext)

    const handleReview = data => {
        const review = {
            fullName: data.fullName,
            designation: data.designation,
            description: data.description
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`Hey, ${user?.displayName} Your Review Submit Successful.`)
                }
            })
    }

    return (
        <section>
            <form onSubmit={handleSubmit(handleReview)} className="contactForm w-50">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group mb-3">
                            <input type="text" {...register('fullName')} className="form-control inputborder py-2" defaultValue={user?.displayName} placeholder="Your Name" required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group mb-3">
                            <input type="text" {...register('designation')} className="form-control inputborder py-2" placeholder="Company's name, Designation" required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group mb-3">
                            <textarea name="message" {...register('description')} className="form-control inputborder" cols="30" rows="4" placeholder="Description" required></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button className='primary-button text-white py-1 px-3'>Submit</button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Review;