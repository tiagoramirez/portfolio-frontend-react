import { NavLink } from 'react-router-dom';
import { HomeIcon } from '../../icons';

export const GoHomeButton = () => {
    return (
        <NavLink to='/' >
            <HomeIcon />
        </NavLink>
    );
};
