import React from 'react';
import Testimonial from './Testimonial';
import Ellipse90 from '../../../assets/images/Ellipse 90.png';
import Ellipse91 from '../../../assets/images/Ellipse 91.png';
import Ellipse92 from '../../../assets/images/Ellipse 92.png';
import star from '../../../assets/icons/star.png';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            image: Ellipse90,
            reviewName: 'Nash Patrik',
            title: 'CEO, Manpol',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
            reviewCount: [star, star, star, star, star]
        },
        {
            id: 2,
            image: Ellipse91,
            reviewName: 'Miriam Barron',
            title: 'CEO, Manpol',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
            reviewCount: [star, star, star, star, star]
        },
        {
            id: 3,
            image: Ellipse92,
            reviewName: 'Bria Malone',
            title: 'CEO, Manpol',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
            reviewCount: [star, star, star, star, star]
        },
    ];

    return (
        <section className='container mt-5'>
            <h2 className='text-center fw-bold'>Testimonials</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                {
                    reviews.map(review => <Testimonial key={review.id} review={review}></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;