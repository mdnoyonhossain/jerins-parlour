import React from 'react';

const OurService = ({ service }) => {
    const { icon, productName, price, productDescription, bgClass } = service;

    return (
        <div className={`col ${bgClass}`}>
            <div className="card">
                <div>
                    <img src={icon} className="card-img-top img-fluid w-25" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">{productName}</h5>
                    <p className='fw-bold primary-color'>{price}</p>
                    <p className="card-text">{productDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default OurService;