import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../../store';
import { startGettingUsers } from '../../../../../store/portfolio';

export const useUsers = () => {
    const dispatch = useAppDispatch();

    const [page, setPage] = useState(0);

    useEffect(() => {
        dispatch(startGettingUsers(page));
    }, [dispatch, page]);

    const { users, totalUsers, loading } = useSelector((state: RootState) => state.portfolio);

    const goPreviousPage = () => {
        if (page > 0) setPage(page - 1);
    };

    const goNextPage = () => {
        if ((page + 1) * 10 < totalUsers) setPage(page + 1);
    };

    return {
        goNextPage,
        goPreviousPage,
        loading,
        page,
        totalUsers,
        users
    };
};
