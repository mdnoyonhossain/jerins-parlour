import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Book = () => {
    const { user } = useContext(AuthContext);

    const { data: booking = [] } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('jerinsToken')}`
                }
            });
            const data = res.json();
            return data;
        }
    })

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {
                booking.length ?
                booking.map(book => <div className="col">
                    <div className="card">
                        <div className="row container pt-3">
                            <div className="col">
                                <img src={book.image} className="img-fluid w-50" alt="" />
                            </div>
                            <div className="col">
                                <p>
                                    <span className='success-status'>Pay</span>
                                </p>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{book.productName}</h5>
                            <p className="card-text">{book.message}</p>
                        </div>
                    </div>
                </div>)
                :
                <h1 className='text-danger'>Book Empty !</h1>
            }
        </div>
    );
};

export default Book;