import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { RootState } from '../../../store';

export const useEdit = () => {
    const { username: usernameParam } = useParams();

    const { pathname } = useLocation();

    const { username: usernameAuth } = useSelector((state: RootState) => state.auth);

    const isLoggedUserProfile = usernameParam === usernameAuth;

    const isEditParam = pathname.split('/').includes('edit');

    useEffect(() => { return; }, [isLoggedUserProfile, isEditParam]);

    return { isLoggedUserProfile, isEditParam };
};
