import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RootState } from '../../../store';
import { ErrorPage, HomePage, UserPage } from '../pages';

export const PortfolioRoutes = () => {

    const { errorMessage } = useSelector((state: RootState) => state.portfolio);

    if (errorMessage) {
        return <ErrorPage />;
    }

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/:username' element={<UserPage />} />
            {/* <Route path="/:username/edit/*" element={<EditPortfolioPage />} /> */}
            <Route path="/*" element={< Navigate to="/" />} />
        </Routes >
    );
};