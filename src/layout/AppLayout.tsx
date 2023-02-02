import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState, Status } from '../store';
import { GoHomeButton, LoginButton, LogoutButton, Search, ToggleThemeButton } from './components';

export const AppLayout = () => {
    const { pathname } = useLocation();

    const { status } = useSelector((state: RootState) => state.auth);

    const isAuthPath = pathname.split('/').includes('auth');

    const isHomePath = pathname === '/';

    return (
        <div className='
            min-h-12 p-2 w-full
            flex flex-col sm:flex-row justify-center sm:justify-end items-center
            shadow-sm shadow-black'
        >
            {status == Status.AUTHENTICATED && !isAuthPath && <LogoutButton />}
            {status == Status.NOT_AUTHENTICATED && !isAuthPath && < LoginButton />}
            {!isHomePath && !isAuthPath && <GoHomeButton />}
            {!isAuthPath && <Search />}
            <ToggleThemeButton />
        </div>
    );
};
