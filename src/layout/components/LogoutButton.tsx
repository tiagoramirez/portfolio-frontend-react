import { LogoutIcon } from '../../icons';
import { startLogout, useAppDispatch } from '../../store';

export const LogoutButton = () => {

    const dispatch = useAppDispatch();

    const onLogout = () => dispatch(startLogout());

    return (
        <button onClick={onLogout} className='
            w-6 mb-2 sm:mb-0 sm:ml-5
            flex items-center justify-center
            hover:text-accent
            transition duration-200 ease-in-out
        '>
            <LogoutIcon />
        </button>
    );
};
