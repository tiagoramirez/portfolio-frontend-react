import { NavLink } from 'react-router-dom';
import { LogoutIcon } from '../../icons';
import { useAppDispatch } from '../../store';
import { startLogout } from '../../store/auth';

export const LogoutButton = () => {

    const dispatch = useAppDispatch();

    const onLogout = () => dispatch(startLogout());

    return (
        <NavLink to='/' onClick={onLogout} className='flex cursor-pointer'>
            <p className='mr-1'>LOGOUT</p>
            <LogoutIcon className='h-6' />
        </NavLink>
    );
};
