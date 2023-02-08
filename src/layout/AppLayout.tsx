import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState, StatusType } from '../store';
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
            shadow-sm shadow-black bg-secondary'
        >
            {!isHomePath && !isAuthPath && <GoHomeButton />}
            {!isAuthPath && <Search />}
            {status == StatusType.AUTHENTICATED && !isAuthPath && <LogoutButton />}
            {status == StatusType.NOT_AUTHENTICATED && !isAuthPath && < LoginButton />}
            <ToggleThemeButton />
        </div>
    );
};
