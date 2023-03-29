import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import { StatusType } from '../../store/auth';

// Usage: When logged with google and it is not registered, it redirects to register page
export const useCheckNotRegistered = () => {
    const { status } = useSelector((state: RootState) => state.auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (status === StatusType.NOT_REGISTERED) {
            navigate('/auth/register');
        }
    }, [navigate, status]);
};