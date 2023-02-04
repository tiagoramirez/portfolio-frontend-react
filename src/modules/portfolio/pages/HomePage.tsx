import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LoadingPage } from '../../../pages';
import { RootState, startGettingUsers, useAppDispatch } from '../../../store';

export const HomePage = () => {

    const dispatch = useAppDispatch();

    const { users, loading } = useSelector((state: RootState) => state.portfolio);

    useEffect(() => {
        dispatch(startGettingUsers());
    }, [dispatch]);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <div className='flex flex-col'>
            {
                users.map(user => (
                    <NavLink to={`/${user.username}`} className='font-semibold text-xl text-center mb-4 cursor-pointer hover:text-accent' key={user.username}>{user.name}</NavLink>
                ))
            }
        </div>
    );
};