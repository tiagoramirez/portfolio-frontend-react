import { NavLink } from 'react-router-dom';
import { LoginIcon } from '../../icons';

export const LoginButton = () => {
    return (
        <NavLink to="/auth/login" className='
            w-6 mb-2 sm:mb-0 sm:ml-5
            flex items-center justify-center
            hover:text-accent
            transition duration-200 ease-in-out
        '>
            <LoginIcon />
        </NavLink>
    );
};
