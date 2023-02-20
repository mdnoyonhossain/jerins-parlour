import React from 'react';
import { Link } from 'react-router-dom';
import mapPin from '../../../assets/icons/map-pin-2-fill.png'

const Footer = () => {
    return (
        <footer className='p-5' style={{ background: '#F63E7B', color: 'white' }}>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-4 d-flex">
                        <img src={mapPin} style={{ height: '25px', marginRight: '10px' }} alt="" />
                        <p className='text-white'>H#000 (0th Floor), Road #00,
                            New DOHS, Mohakhali, Dhaka, Bangladesh
                        </p>
                    </div>
                    <div className="col-md-2">
                        <h5>Company</h5>
                        <ul>
                            <li className='p-0'><Link to="/">About</Link></li>
                            <li className='p-0'><Link to="/">Porject</Link></li>
                            <li className='p-0'><Link to="/">Our Team</Link></li>
                            <li className='p-0'><Link to="/">Terms Conditions</Link></li>
                            <li className='p-0'><Link to="/">Submit Listing</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Quick Links</h5>
                        <ul>
                            <li className='p-0'><Link to="/">Quick Links</Link></li>
                            <li className='p-0'><Link to="/">Rentals</Link></li>
                            <li className='p-0'><Link to="/">Contact</Link></li>
                            <li className='p-0'><Link to="/">Sales</Link></li>
                            <li className='p-0'><Link to="/">Our blog</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>About us</h5>
                        <p className='text-white' style={{ color: '#666666 !important' }}>Amazing flyers, social media posts and brand <br /> representations that would make your brand stand <br /> out. sed as a placeholder before final copy is available.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;