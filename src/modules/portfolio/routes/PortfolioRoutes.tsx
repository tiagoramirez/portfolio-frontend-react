import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RootState } from '../../../store';
import { ErrorPage, HomePage } from '../pages';

export const PortfolioRoutes = () => {

    const { errorMessage, loading } = useSelector((state: RootState) => state.portfolio);

    if (errorMessage) {
        return <ErrorPage />;
    }

    if (loading) {
        console.log('loading en true');
    } else {
        console.log('loading false');
    }

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path='/:username' element={<UserPortfolioPage />} />
            <Route path="/:username/edit/*" element={<EditPortfolioPage />} /> */}
            <Route path="/*" element={< Navigate to="/" />} />
        </Routes >
    );
};