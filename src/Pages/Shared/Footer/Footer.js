import React from 'react';
import { Link } from 'react-router-dom';
import mapPin from '../../../assets/icons/map-pin-2-fill.png'

const Footer = () => {
    return (
        <footer className='p-5' style={{background: '#F63E7B', color: 'white'}}>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-4 d-flex">
                        <img src={mapPin} style={{height: '25px', marginRight: '10px'}} alt="" />
                        <p className='text-white'>H#000 (0th Floor), Road #00,
                            New DOHS, Mohakhali, Dhaka, Bangladesh
                        </p>
                    </div>
                    <div className="col-md-2">
                        <h5>Company</h5>
                        <ul>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Porject</Link></li>
                            <li><Link to="/">Our Team</Link></li>
                            <li><Link to="/">Terms Conditions</Link></li>
                            <li><Link to="/">Submit Listing</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><Link to="/">Quick Links</Link></li>
                            <li><Link to="/">Rentals</Link></li>
                            <li><Link to="/">Contact</Link></li>
                            <li><Link to="/">Sales</Link></li>
                            <li><Link to="/">Our blog</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>About us</h5>
                        <p className='text-white' style={{color: '#666666 !important'}}>Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit. Purus commodo ipsum <br />
                            duis laoreet maecenas. Feugiat </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;