import React from 'react';
import bannerImg from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const Banner = () => {
    return (
        <section className='pt-4 section-background p-4'>
            <div className='container'>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className='fw-bold' style={{fontSize: '50px'}}>BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                        <p className='mt-4 mb-4'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                        <button className='primary-button text-white px-4 py-2'>Get an Appointment</button>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid w-75' src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;