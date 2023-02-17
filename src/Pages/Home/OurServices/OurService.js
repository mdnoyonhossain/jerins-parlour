import React from 'react';
import { Link } from 'react-router-dom';

const OurService = ({ service }) => {
    const { image, productName, price, productDescription, bgClass } = service;

    return (
        <div className={`col ${bgClass}`}>
            <div className="card">
                <div>
                    <img src={image} className="card-img-top img-fluid w-25" alt="..." />
                </div>
                <div className="card-body">
                <h5 className="card-title fw-bold"><Link to={`/service/${service._id}`} className='text-black text-decoration-none'>{productName}</Link></h5>
                    <p className='fw-bold primary-color'>{price}</p>
                    <p className="card-text">{productDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default OurService;