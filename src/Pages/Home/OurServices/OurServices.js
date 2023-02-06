import React from 'react';
import group1 from '../../../assets/icons/group1.png';
import group2 from '../../../assets/icons/group2.png';
import group3 from '../../../assets/icons/gorup3.png';
import OurService from './OurService';

const OurServices = () => {

    const serviceProduct = [
        {
            id: 1,
            icon: group1,
            productName: 'Anti Age Face Treatment',
            price: '$199',
            productDescription: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        },
        {
            id: 2,
            icon: group2,
            productName: 'Hair Color & Styleing',
            price: '$99',
            productDescription: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
            bgClass: 'shadow rounded pt-4'
        },
        {
            id: 3,
            icon: group3,
            productName: 'Skin Care Treatment',
            price: '$299',
            productDescription: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        },
    ];

    return (
        <div className='container'>
            <h2 className='fw-bold text-center mt-5'>Our Awesome <span style={{color: '#F63E7B'}}>Services</span></h2>
            <div className='row row-cols-1 row-cols-md-3 text-center mt-5'>
                {
                    serviceProduct.map(service => <OurService key={service.id} service={service}></OurService>)
                }
            </div>
            <div className='text-center mt-5 mb-4'>
                <button className='primary-button text-white px-5 py-3'>Explore More</button>
            </div>
        </div>
    );
};

export default OurServices;