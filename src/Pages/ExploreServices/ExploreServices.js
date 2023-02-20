import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const ExploreServices = () => {
    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('https://jerins-parlour-server-livid.vercel.app/services');
            const data = await (await res).json();
            return data;
        }
    })

    return (
        <section className='container'>
            <div className='row row-cols-1 row-cols-md-3 text-center mt-5 mb-4'>
                {
                    services.map(service => <div key={service._id} className='col service-hover p-3'>
                        <div className="card service-hover">
                            <div>
                                <img src={service.image} className="card-img-top img-fluid w-25" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold"><Link to={`/service/${service._id}`} className='text-black text-decoration-none title'>{service.productName}</Link></h5>
                                <p className='fw-bold primary-color'>{service.price}</p>
                                <p className="card-text align-text">{service.productDescription}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default ExploreServices;