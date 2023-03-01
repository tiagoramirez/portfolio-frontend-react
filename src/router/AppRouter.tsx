import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AuthRoutes, useCheckAuth } from '../modules/auth';
import { PortfolioRoutes } from '../modules/portfolio';
import { RootState, StatusType } from '../store';

export const AppRouter = () => {
    useCheckAuth();

    const { status } = useSelector((state: RootState) => state.auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (status === StatusType.NOT_REGISTERED) {
            navigate('/auth/register');
        }
    }, [navigate, status]);

    return (
        <Routes>
            <Route path='/portfolio-frontend-react/auth/*' element={<AuthRoutes />} />
            <Route path='/portfolio-frontend-react/*' element={<PortfolioRoutes />} />
        </Routes>
    );
};