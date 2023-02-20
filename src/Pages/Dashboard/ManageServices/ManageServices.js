import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ManageServices = () => {
    const [serviceModal, setServiceModal] = useState(null);
    useTitle('Services')

    const { data: services = [], refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('https://jerins-parlour-server-livid.vercel.app/services', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('jerinsToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    
    const handleDeleteService = service => {
        fetch(`https://jerins-parlour-server-livid.vercel.app/services/${service._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${service.productName}. Delete Successfully`);
            }
        })
    }

    return (
        <section className='order-list'>
            <table className="table">
                <thead style={{ background: '#F5F6FA' }}>
                    <tr style={{ border: '1px solid white' }}>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Update</th>
                        <th scope="col">Adction</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => <tr key={service._id} style={{ border: '1px solid white' }}>
                            <td>
                                <img src={service.image} className="img-fluid" style={{ width: '50px' }} alt="" />
                            </td>
                            <td>{service.productName}</td>
                            <td>{service.price}</td>
                            <td>
                                <Link to={`/dashboard/manage-services/update/${service._id}`}><button className='text-white px-2 update-button'>Update</button></Link>
                            </td>
                            <td>
                                <button onClick={() => setServiceModal(service)} type="button" className='primary-button text-white px-2' data-bs-toggle="modal" data-bs-target="#ConfirmationModal">Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            {
                serviceModal && <ConfirmationModal
                    title={`Are you sure you want to Delete?`}
                    message={`If you Delete ${serviceModal.productName}. it cannot be undone.`}
                    successAction={handleDeleteService}
                    modalData={serviceModal}
                ></ConfirmationModal>   
            }
        </section>
    );
};

export default ManageServices;