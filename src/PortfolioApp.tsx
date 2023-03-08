import { useStartApp } from './hooks';
import { AppLayout } from './layout';
import { AppRouter } from './router';

export const PortfolioApp = () => {
    useStartApp();

    return (
        <>
            <AppLayout />
            <AppRouter />
        </>
    );
};
