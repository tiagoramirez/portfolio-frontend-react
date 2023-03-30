import { NavLink } from 'react-router-dom';
import { LoginIcon } from '../../icons';

export const LoginButton = () => {
    return (
        <NavLink to='/auth/login' className='flex'>
            <p className='mr-1'>SIGN IN</p>
            <LoginIcon />
        </NavLink>
    );
};
