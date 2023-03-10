import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Book = () => {
    const { user } = useContext(AuthContext);
    useTitle('Book')

    const { data: booking = [] } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch(`https://jerins-parlour-server-livid.vercel.app/bookings?email=${user?.email}`, {
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
                    booking.map(book => <div key={book._id} className="col">
                        <div className="card">
                            <div className="row container pt-3">
                                <div className="col">
                                    <img src={book.image} className="img-fluid w-50" alt="" />
                                </div>
                                <div className="col">
                                    <p>
                                        {
                                            book?.paid ?
                                                <Link><span className='success-status'>Paid</span></Link>
                                                :
                                                <Link to={`/dashboard/book/payment/${book._id}`}><span className='success-status' style={{background: '#FFECF2'}}>Pay</span></Link>
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="card-body">
                                <span className='text-danger' style={{fontSize: '12px'}}><span className='text-success fw-semibold'>Transaction ID:</span> {book?.transactionId}</span>
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