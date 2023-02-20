import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import DashboardNavBar from '../Pages/Dashboard/DashboardNavBar/DashboardNavBar';
import './Dashboard.module.css'
import { FaAddressBook, FaCalendar, FaCartArrowDown, FaPlus, FaRedRiver, FaShoppingBag, FaShoppingBasket } from "react-icons/fa";
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    useTitle('Dashboard')

    return (
        <section>
            <DashboardNavBar></DashboardNavBar>
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-auto min-vh-100'>
                        <ul>
                            {
                                !isAdmin &&
                                <>
                                    <li>
                                        <NavLink to="/dashboard/book" className='nav-NavLink px-2 text-decoration-none'>
                                            <FaCartArrowDown className='f-icon'></FaCartArrowDown> <span className='ms-1 d-none d-sm-inline fw-semibold' style={{ fontSize: '13px', color: '#878787' }}>Book</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/booking-list" className='nav-NavLink px-2 text-decoration-none'>
                                            <FaShoppingBag></FaShoppingBag> <span className='ms-1 d-none d-sm-inline fw-semibold' style={{ fontSize: '13px', color: '#878787' }}>Booking List</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/review" className='nav-NavLink px-2 text-decoration-none'>
                                            <FaRedRiver></FaRedRiver> <span className='ms-1 d-none d-sm-inline fw-semibold' style={{ fontSize: '13px', color: '#878787' }}>Review</span>
                                        </NavLink>
                                    </li>
                                </>
                            }
                            {
                                isAdmin && <>
                                    <li>
                                        <NavLink to="/dashboard/order-list" className='nav-NavLink px-2 text-decoration-none'>
                                            <FaShoppingBasket></FaShoppingBasket> <span className='ms-1 d-none d-sm-inline fw-semibold' style={{ fontSize: '13px', color: '#878787' }}>Order List</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/add-service" className='nav-NavLink px-2 text-decoration-none'>
                                            <FaPlus></FaPlus> <span className='ms-1 d-none d-sm-inline fw-semibold' style={{ fontSize: '13px', color: '#878787' }}>Add Service</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/make-admin" className='nav-NavLink px-2 text-decoration-none'>
                                            <FaAddressBook></FaAddressBook> <span className='ms-1 d-none d-sm-inline fw-semibold' style={{ fontSize: '13px', color: '#878787' }}>Make Admin</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manage-services" className='nav-NavLink px-2 text-decoration-none'>
                                            <FaCalendar></FaCalendar> <span className='ms-1 d-none d-sm-inline fw-semibold' style={{ fontSize: '13px', color: '#878787' }}>Manage Services</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manage-review" className='nav-NavLink px-2 text-decoration-none'>
                                            <FaCalendar></FaCalendar> <span className='ms-1 d-none d-sm-inline fw-semibold' style={{ fontSize: '13px', color: '#878787' }}>Manage Review</span>
                                        </NavLink>
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