import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AuthRoutes } from '../modules/auth';
import { PortfolioRoutes } from '../modules/portfolio';
import { RootState, Status } from '../store';

export const AppRouter = () => {

    const { status } = useSelector((state: RootState) => state.auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (status === Status.NOT_REGISTERED) {
            navigate('/auth/register');
        }
    }, [navigate, status]);

    return (
        <Routes>
            <Route path='/auth/*' element={<AuthRoutes />} />
            <Route path='/*' element={<PortfolioRoutes />} />
        </Routes>
    );
};