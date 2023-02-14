import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashboardNavBar from '../Pages/Dashboard/DashboardNavBar/DashboardNavBar';
import './Dashboard.module.css'
import { FaAddressBook, FaCalendar, FaCartArrowDown, FaPlus, FaRedRiver, FaShoppingBag, FaShoppingBasket } from "react-icons/fa";
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    return (
        <section>
            <DashboardNavBar></DashboardNavBar>
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-auto min-vh-100'>
                        <ul>
                            <li>
                                <Link to="/dashboard/book" className='nav-link px-2'>
                                    <FaCartArrowDown className='f-icon'></FaCartArrowDown> <span className='ms-1 d-none d-sm-inline fw-semibold' style={{ fontSize: '13px', color: '#878787' }}>Book</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/booking-list" className='nav-link px-2'>
                                    <FaShoppingBag></FaShoppingBag> <span className='ms-1 d-none d-sm-inline fw-semibold' style={{ fontSize: '13px', color: '#878787' }}>Booking List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/review" className='nav-link px-2'>
                                    <FaRedRiver></FaRedRiver> <span className='ms-1 d-none d-sm-inline fw-semibold' style={{ fontSize: '13px', color: '#878787' }}>Review</span>
                                </Link>
                            </li>
                            {
                                isAdmin && <>
                                    <li>
                                        <Link to="/dashboard/order-list" className='nav-link px-2'>
                                            <FaShoppingBasket></FaShoppingBasket> <span className='ms-1 d-none d-sm-inline fw-semibold' style={{ fontSize: '13px', color: '#878787' }}>Order List</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/add-service" className='nav-link px-2'>
                                            <FaPlus></FaPlus> <span className='ms-1 d-none d-sm-inline fw-semibold' style={{ fontSize: '13px', color: '#878787' }}>Add Service</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/make-admin" className='nav-link px-2'>
                                            <FaAddressBook></FaAddressBook> <span className='ms-1 d-none d-sm-inline fw-semibold' style={{ fontSize: '13px', color: '#878787' }}>Make Admin</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/manage-services" className='nav-link px-2'>
                                            <FaCalendar></FaCalendar> <span className='ms-1 d-none d-sm-inline fw-semibold' style={{ fontSize: '13px', color: '#878787' }}>Manage Services</span>
                                        </Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                    <div className='col p-4' style={{ background: '#F4F7FC' }}>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardLayout;