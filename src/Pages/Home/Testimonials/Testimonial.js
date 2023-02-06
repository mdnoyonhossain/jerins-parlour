import React from 'react';

const Testimonial = ({ review }) => {
    const { image, reviewName, title, description, reviewCount } = review;
    
    return (
        <div className="col">
            <div className="card">
                <div className='d-flex align-items-center'>
                    <img src={image} className="img-fluid" style={{width: '60px'}} alt="" />
                    <div className='ms-4 align-items-center'>
                        <h6 className="card-title fw-bold m-0">{reviewName}</h6>
                        <p className='fw-bold' style={{fontSize: '11px', color: 'black'}}>{title}</p>
                    </div>
                </div>
                <div className="card-body mb-5">
                    <p className="card-text">{description}</p>
                    {
                        reviewCount.map((reviewStar, i )=> <img key={i} src={reviewStar} className="review-star" alt="" />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;