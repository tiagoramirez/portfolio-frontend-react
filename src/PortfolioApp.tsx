import { useStartApp } from './hooks';
import { AppLayout } from './layout';
import { AppRouter } from './router';

export const PortfolioApp = () => {
    useStartApp();

    return (
        <>
            <AppLayout />
            <div className='min-h-[calc(85%)] flex flex-col items-center justify-center'>
                <AppRouter />
            </div>
        </>
    );
};
