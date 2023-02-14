import React from 'react';
import { toast } from 'react-hot-toast';

const MakeAdmin = () => {
    const handleMakeAdmin = event => {
        event.preventDefault();

        const form = event.target;
        const adminEmail = form.adminEmail.value;

        fetch(`http://localhost:5000/users/admin?email=${adminEmail}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('jerinsToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    toast.error(`${adminEmail + ' ' + data.message}`)
                }

                if (data.modifiedCount > 0) {
                    toast.success('Admin Create Successfully.');
                    form.reset();
                }
            })
    }

    return (
        <section className='make-admin'>
            <form onSubmit={handleMakeAdmin}>
                <label className='fw-bold pb-1'>Email</label><br />
                <input className="w-50 py-1 px-2 me-2" name='adminEmail' style={{ border: '1px solid #C9C9C9', borderRadius: '5px' }} type="email" placeholder="noyon@gmail.com" required />
                <button type='submit' className='primary-button text-white py-1 px-4'>Submit</button>
            </form>
        </section>
    );
};

export default MakeAdmin;