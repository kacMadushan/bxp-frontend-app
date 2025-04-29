import { JSX, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../context/AuthProvider';

interface PrivateRouteProps {
    children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { isAuthenticated } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            return navigate('/login', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return children;
};

export default PrivateRoute;