import React from 'react';
import Ellipse90 from '../../../assets/images/Ellipse92.png';
import star from '../../../assets/icons/star.png';

const Testimonial = ({ review }) => {
    const { fullName, designation, description } = review;
    const reviewCount = [star, star, star, star, star];

    return (
        <div className="col">
            <div className="card">
                <div className='d-flex align-items-center'>
                    <img src={Ellipse90} className="img-fluid" style={{ width: '60px' }} alt="" />
                    <div className='ms-4 align-items-center'>
                        <h6 className="card-title fw-bold m-0">{fullName}</h6>
                        <p className='fw-bold' style={{ fontSize: '11px', color: 'black' }}>{designation}</p>
                    </div>
                </div>
                <div className="card-body mb-5">
                    <p className="card-text">{description}</p>
                    {
                        reviewCount.map((reviewStar, i) => <img key={i} src={reviewStar} className="review-star" alt="" />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;