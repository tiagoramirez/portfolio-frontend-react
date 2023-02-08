import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { RootState, StatusType } from '../../../store';

export const useEdit = () => {
    const { username: usernameParam } = useParams();

    const navigate = useNavigate();

    const { pathname } = useLocation();

    const { status, username: usernameAuth } = useSelector((state: RootState) => state.auth);

    const isAuthenticated = status == StatusType.AUTHENTICATED;

    const isEditPage = pathname.split('/').includes('edit');

    const onRedirectEdit = () => navigate(`/${usernameAuth}/edit`);

    const isSameUserParamAuth = usernameParam === usernameAuth;

    useEffect(() => {
        if (!isSameUserParamAuth && isEditPage) navigate(`/${usernameParam}`);

    }, [isEditPage, isSameUserParamAuth, navigate, usernameParam]);

    return {
        isEditPage,
        isAuthenticated,
        onRedirectEdit,
        isSameUserParamAuth
    };
};
