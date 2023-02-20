import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Ellipse90 from '../../../assets/images/Ellipse92.png';
import star from '../../../assets/icons/star.png';

const MoreTestimonials = () => {
    const reviewCount = [star, star, star, star, star];

    const { data: moreTestimonials = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/more-testimonials');
            const data = await (await res).json();
            return data;
        }
    })

    return (
        <section className='container'>
            <div className="row row-cols-1 row-cols-md-3 mt-5">
                {
                    moreTestimonials.map(more => <div key={more._id} className="col">
                        <div className="card">
                            <div className='d-flex align-items-center'>
                                <img src={Ellipse90} className="img-fluid" style={{ width: '60px' }} alt="" />
                                <div className='ms-4 align-items-center'>
                                    <h6 className="card-title fw-bold m-0">{more.fullName}</h6>
                                    <p className='fw-bold' style={{ fontSize: '11px', color: 'black' }}>{more.designation}</p>
                                </div>
                            </div>
                            <div className="card-body mb-5">
                                <p className="card-text">{more.description}</p>
                                {
                                    reviewCount.map((reviewStar, i) => <img key={i} src={reviewStar} className="review-star" alt="" />)
                                }
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </section>
    );
};

export default MoreTestimonials;