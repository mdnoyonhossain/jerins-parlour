import React from 'react';
import contactus from '../../assets/images/contact.png'

const ContactUs = () => {
    return (
        <section className='container my-5'>
            <div className="row">
                <div className="col-md-6">
                    <h3>Thanks for your interest <br /> in Jerins Parlour</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque quaerat eius iste! Minima praesentium atque illo sunt. Quo, molestias?</p>
                    <img src={contactus} className='img-fluid' alt="" />
                </div>
                <div className="col-md-6 mt-5">
                    <form className="contactForm">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-group">
                                    <input type="emali" className="form-control" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Address" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-3">
                                <input type="text" className="form-control" placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-3">
                                    <textarea name="message" className="form-control " cols="30" rows="4" placeholder="Your Message"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group text-center">
                                    <button type='submit' className='primary-button text-white px-3 py-2 inputborder'>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;