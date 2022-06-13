import { Navigate } from 'react';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    if(!user){
        return <Navigate to='/' />
    }
    return children
};
