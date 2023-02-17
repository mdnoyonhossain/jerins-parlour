import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const OrderList = () => {

    const { data: orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/admin/orders', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('jerinsToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleServiceStatus = (status, id) => {
        const serviceStatus = { status: status }

        console.log(id, serviceStatus);
    }

    return (
        <section className='order-list'>
            <table className="table">
                <thead style={{ background: '#F5F6FA' }}>
                    <tr style={{ border: '1px solid white' }}>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pay With</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order._id} style={{ border: '1px solid white' }}>
                            <td>{order.fullName}</td>
                            <td>{order.email}</td>
                            <td>{order.productName}</td>
                            <td>Stripe</td>
                            <td>
                                <div className="dropdown">
                                    <Link className="bg-white text-black p-1 text-decoration-none dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Status</Link>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item" onClick={() => handleServiceStatus('Pending', order._id)} style={{ cursor: 'pointer' }}>Pending</li>
                                        <li className="dropdown-item" onClick={() => handleServiceStatus('On Going', order._id)} style={{ cursor: 'pointer' }}>On Going</li>
                                        <li className="dropdown-item" onClick={() => handleServiceStatus('Done', order._id)} style={{ cursor: 'pointer' }}>Done</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </section>
    );
};

export default OrderList;