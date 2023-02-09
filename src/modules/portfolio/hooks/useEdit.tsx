import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../store';

export const useEdit = () => {
    const { username: usernameParam } = useParams();

    const { username: usernameAuth } = useSelector((state: RootState) => state.auth);

    const isSameUserParamAuth = usernameParam === usernameAuth;

    useEffect(() => { return; }, [isSameUserParamAuth]);

    return { isSameUserParamAuth };
};
