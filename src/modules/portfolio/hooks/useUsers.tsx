import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, startGettingUsers, useAppDispatch } from '../../../store';

export const useUsers = () => {
    const dispatch = useAppDispatch();

    const [page, setPage] = useState(0);

    const { users, totalUsers, errorMessage } = useSelector((state: RootState) => state.portfolio);

    useEffect(() => {
        dispatch(startGettingUsers(page));
    }, [dispatch, page, errorMessage]);

    const goPreviousPage = () => {
        if (page > 0) setPage(page - 1);
    };

    const goNextPage = () => {
        if ((page + 1) * 10 < totalUsers) setPage(page + 1);
    };

    return {
        goPreviousPage,
        goNextPage,
        users,
        totalUsers,
        page
    };
};
