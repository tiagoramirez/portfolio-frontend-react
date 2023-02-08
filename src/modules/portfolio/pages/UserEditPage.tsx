import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../../store';

export const UserEditPage = () => {
    const { username: usernameAuth } = useSelector((state: RootState) => state.auth);

    const { username: usernameParam } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (usernameParam !== usernameAuth) navigate(`/${usernameParam}`);

    }, [navigate, usernameAuth, usernameParam]);

    return (
        <div>UserEditPage</div>
    );
};
