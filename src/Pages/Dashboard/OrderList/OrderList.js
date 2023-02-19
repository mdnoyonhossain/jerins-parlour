import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const OrderList = () => {

    const { data: orders = [], refetch } = useQuery({
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

        fetch(`http://localhost:5000/admin/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceStatus)
        })
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount > 0){
                toast.success('Status Updated');
                refetch();
            }
        })
    }

    const handleOrderDelete = id => {
        fetch(`http://localhost:5000/admin/order/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Order Delete Done');
                refetch();
            }
        })
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
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <>{ order?.paid && <tr key={order._id} style={{ border: '1px solid white' }}>
                            <td>{order.fullName}</td>
                            <td>{order.email}</td>
                            <td>{order.productName}</td>
                            <td>Stripe</td>
                            <td>
                                <div className="dropdown">
                                    <Link className="bg-white text-black p-1 text-decoration-none dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{order?.status}</Link>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item" onClick={() => handleServiceStatus('Processing', order._id)} style={{ cursor: 'pointer' }}>Processing</li>
                                        <li className="dropdown-item" onClick={() => handleServiceStatus('On Going', order._id)} style={{ cursor: 'pointer' }}>On Going</li>
                                        <li className="dropdown-item" onClick={() => handleServiceStatus('Done', order._id)} style={{ cursor: 'pointer' }}>Done</li>
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <button onClick={() => handleOrderDelete(order._id)} className='primary-button text-white'>Delete</button>
                            </td>
                        </tr>}</>)
                    }
                </tbody>
            </table>
        </section>
    );
};

export default OrderList;