import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const DashboardNavBar = () => {
    const {user} = useContext(AuthContext);

    return (
        <nav class="navbar navbar-expand-lg container">
            <div class="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className='img-fluid' src={logo} style={{ width: '100px', marginRight: '40px' }} alt="" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <p className='text-black fw-bold d-none d-md-block d-lg-block'>Order List</p>
                        </li>

                    </ul>
                    <div class="d-flex" >
                        <Link className='text-decoration-none'><p className='fw-semibold text-black'>{user?.displayName}</p></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavBar;