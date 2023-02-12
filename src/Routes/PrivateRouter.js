import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Loading from '../Pages/Shared/Loading/Loading';

const PrivateRouter = ({children}) => {
    const {user, isLoading} = useContext(AuthContext);

    const location = useLocation();

    if(isLoading) {
        return <Loading></Loading>
    }

    if(user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRouter;