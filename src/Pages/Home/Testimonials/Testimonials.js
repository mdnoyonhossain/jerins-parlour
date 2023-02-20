import React from 'react';
import Testimonial from './Testimonial';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Testimonials = () => {
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch('https://jerins-parlour-server-livid.vercel.app/reviews');
            const data = await res.json();
            return data;
        }
    })

    return (
        <section className='container mt-5'>
            <h2 className='text-center fw-bold'>Testimonials</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                {
                    reviews.map(review => <Testimonial key={review.id} review={review}></Testimonial>)
                }
            </div>
            <div className='text-center mb-4'>
                <Link to='/more-testimonials'><button className='primary-button text-white px-4 py-2'>More Testimonials</button></Link>
            </div>
        </section>
    );
};

export default Testimonials;