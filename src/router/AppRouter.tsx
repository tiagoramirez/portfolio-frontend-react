import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../modules/auth';
import { PortfolioRoutes } from '../modules/portfolio';
import { useCheckNotRegistered } from './hooks';

export const AppRouter = () => {

    useCheckNotRegistered();

    return (
        <div className='min-h-[82%] sm:min-h-[93%] flex flex-col items-center justify-center'>
            <Routes>
                <Route path='/auth/*' element={<AuthRoutes />} />
                <Route path='/*' element={<PortfolioRoutes />} />
            </Routes>
        </div>
    );
};