import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserIcon } from '../../icons';
import { RootState } from '../../store';

export const GoProfileButton = () => {
    const { username } = useSelector((state: RootState) => state.auth);

    return (
        <NavLink to={`/${username}`}>
            <UserIcon />
        </NavLink >
    );
};
