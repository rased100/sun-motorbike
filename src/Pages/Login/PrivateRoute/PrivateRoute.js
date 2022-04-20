import { CircularProgress } from '@mui/material';
import React from 'react';
<<<<<<< HEAD
import { useLocation, Navigate } from 'react-router-dom';
=======
import { Navigate, useLocation } from 'react-router-dom';
>>>>>>> 07ad035572c614b4e2019b0fbfa3f92842842fac
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return <CircularProgress /> }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;