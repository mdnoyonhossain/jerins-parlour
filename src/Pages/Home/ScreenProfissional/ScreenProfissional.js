import React from 'react';
import screenImg from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const ScreenProfissional = () => {
    return (
        <section className='mt-5 p-5' style={{background: '#FFF8F5'}}>
            <div className='container p-4'>
                <div className='row'>
                    <div className="col-md-6">
                        <img src={screenImg} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 className='fw-bold mb-4'>Let us handle your <br /> screen <span className='primary-color'>Professionally</span>.</h1>
                        <p className='mb-4'>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general ipsum. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Purus commodo ipsum.</p>
                        <div className='row'>
                            <div className="col">
                                <h3 className='fw-bold primary-color'>500+</h3>
                                <p>Happy Customer</p>
                            </div>
                            <div className="col">
                                <h3 className='fw-bold primary-color'>16+</h3>
                                <p>Total Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScreenProfissional;