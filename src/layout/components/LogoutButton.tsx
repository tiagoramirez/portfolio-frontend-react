import { LogoutIcon } from '../../icons';
import { startLogout, useAppDispatch } from '../../store';

export const LogoutButton = () => {

    const dispatch = useAppDispatch();

    const onLogout = () => dispatch(startLogout());

    return (
        <button type='button' onClick={onLogout} className='
            mb-3 sm:mb-0 sm:ml-5 px-1
            flex items-center justify-center
            hover:text-accent
            transition duration-200 ease-in-out
        '>
            <p className='mr-1'>Logout</p>
            <LogoutIcon className='w-6 h-6' />
        </button>
    );
};
