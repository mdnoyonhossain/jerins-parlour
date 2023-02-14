import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Loading from '../Pages/Shared/Loading/Loading';

const AdminRoute = ({ children }) => {
    const { user, isLoading, userSignOut } = useContext(AuthContext);
    const [isAdmin, setIsAdminLoadin] = useAdmin(user?.email);
    const location = useLocation();

    if (isLoading || setIsAdminLoadin) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }

    return (
        <>
            {
                userSignOut()
                    .then(() => {
                        toast.success('Sign Out Successful.');
                        localStorage.removeItem('jerinsToken')
                    })
                    .catch(error => toast.error(error.message))
            }
            <Navigate to='/login' state={{ from: location }} replace></Navigate>
        </>
    )
};

export default AdminRoute;