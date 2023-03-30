import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../modules/auth';
import { PortfolioRoutes } from '../modules/portfolio';
import { useCheckNotRegistered } from './hook';

export const AppRouter = () => {

    useCheckNotRegistered();

    return (
        <main>
            <Routes>
                <Route path='/auth/*' element={<AuthRoutes />} />
                <Route path='/*' element={<PortfolioRoutes />} />
            </Routes>
        </main>
    );
};