import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, UserPage } from '../pages';
import { EditRoutes } from './EditRoutes';

export const PortfolioRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/:username' element={<UserPage />} />
            <Route path='/:username/edit/*' element={<EditRoutes />} />
            <Route path='/*' element={< Navigate to='/' />} />
        </Routes >
    );
};