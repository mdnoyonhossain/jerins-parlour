import React from 'react';

const ProjectForm = () => {
    return (
        <section className='section-background p-4'>
            <div className='container mt-4'>
                <h3 className='fw-bold text-center mb-5'>Let us handle your <br /> project, professionally.</h3>

                <form method="POST" className="contactForm w-50 m-auto">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="form-group">
                                <input type="text" className="form-control inputborder" placeholder="First Name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="email" className="form-control inputborder" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="form-group">
                                <input type="text" className="form-control inputborder" placeholder="Email Address" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="email" className="form-control inputborder" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mb-3">
                                <textarea name="message" className="form-control inputborder" cols="30" rows="4" placeholder="Your Message"></textarea>
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
        </section>
    );
};

export default ProjectForm;