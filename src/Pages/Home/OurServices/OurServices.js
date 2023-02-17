import React from 'react';
import OurService from './OurService';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const OurServices = () => {
    const {data: serviceProduct = []} = useQuery({
        queryKey: ['serviceProduct'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/homeServices');
            const data = await res.json();
            return data;
        }
    });
   

    return (
        <div className='container'>
            <h2 className='fw-bold text-center mt-5'>Our Awesome <span style={{color: '#F63E7B'}}>Services</span></h2>
            <div className='row row-cols-1 row-cols-md-3 text-center mt-5'>
                {
                    serviceProduct.map(service => <OurService key={service._id} service={service}></OurService>)
                }
            </div>
            <div className='text-center mt-5 mb-4'>
                <Link to='/explore'><button className='primary-button text-white px-4 py-2'>Explore More</button></Link>
            </div>
        </div>
    );
};

export default OurServices;