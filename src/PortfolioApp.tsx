import { useEffect } from 'react';
import { AppLayout } from './layout';
import { AppRouter } from './router';
import { setLightMode, useAppDispatch } from './store';

export const PortfolioApp = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setLightMode());
    }, [dispatch]);

    return (
        <>
            <AppLayout />
            <div className='min-h-[calc(100%_-_3rem)] flex flex-col items-center justify-center'>
                <AppRouter />
            </div>
        </>
    );
};
