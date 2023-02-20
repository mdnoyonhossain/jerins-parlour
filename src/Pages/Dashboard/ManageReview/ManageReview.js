import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const ManageReview = () => {
    useTitle('Review')

    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch('https://jerins-parlour-server-livid.vercel.app/more-testimonials', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('jerinsToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleReviewDelete = id => {
        fetch(`https://jerins-parlour-server-livid.vercel.app/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Delete Successful.');
                    refetch()
                }
            })
    }

    return (
        <section className='order-list'>
            <table className="table">
                <thead style={{ background: '#F5F6FA' }}>
                    <tr style={{ border: '1px solid white' }}>
                        <th scope="col">Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => <tr key={review._id} style={{ border: '1px solid white' }}>
                            <td>{review.fullName}</td>
                            <td>{review.designation}</td>
                            <td>
                                <button onClick={() => handleReviewDelete(review._id)} className='primary-button text-white'>Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </section>
    );
};

export default ManageReview;