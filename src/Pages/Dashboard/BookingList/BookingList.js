import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const BookingList = () => {
    const { user } = useContext(AuthContext);
    useTitle('Booking List')

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('jerinsToken')}`
                }
            });
            const data = await (await res).json();
            return data;
        }
    })

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {
                !bookings?.paid ?
                    bookings.map(booking => <> {booking?.paid && <div key={booking._id} className="col">
                        <div className="card">
                            <div className="row container pt-3">
                                <div className="col">
                                    <img src={booking.image} className="img-fluid w-50" alt="" />
                                </div>
                                <div className="col">
                                    <p>
                                        <span className='success-status'>{booking.status}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="card-body">
                                <span className='text-danger' style={{ fontSize: '12px' }}><span className='text-success fw-semibold'>Transaction ID:</span> {booking?.transactionId}</span>
                                <h5 className="card-title fw-bold">{booking.productName}</h5>
                                <p className="card-text">{booking.productDescription}</p>
                            </div>
                        </div>
                    </div>}</>)
                    :
                    <h1 className='text-danger'>Booking Empty !</h1>
            }
        </div>
    );
};

export default BookingList;