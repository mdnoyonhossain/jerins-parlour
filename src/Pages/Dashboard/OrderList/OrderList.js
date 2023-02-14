import { useQuery } from '@tanstack/react-query';
import React from 'react';

const OrderList = () => {
    const { data: orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/orders', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('jerinsToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <section className='order-list'>
            <table class="table">
                <thead style={{ background: '#F5F6FA' }}>
                    <tr style={{ border: '1px solid white' }}>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Price</th>
                        <th scope="col">Pay With</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order._id} style={{ border: '1px solid white' }}>
                            <td>
                                <img src={order.icon} className="img-fluid" style={{width: '50px'}} alt="" />
                            </td>
                            <td>{order.fullName}</td>
                            <td>{order.email}</td>
                            <td>{order.productName}</td>
                            <td>{order.price}</td>
                            <td>@mdo</td>
                            <td>
                                <select style={{ border: 'none', width: '85px' }}>
                                    <option value="Done">Done</option>
                                    <option value="Pending">Pending</option>
                                    <option value="On Going">Going</option>
                                </select>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </section>
    );
};

export default OrderList;