import { GoHomeButton, GoProfileButton, LoginButton, LogoutButton, ToggleThemeButton } from './components';
import { usePathInfo } from '../hooks';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { StatusType } from '../store/auth';

export const AppLayout = () => {
    const { isAuthPath, isHomePath } = usePathInfo();

    const { status } = useSelector((state: RootState) => state.auth);

    const isAuthenticated = status == StatusType.AUTHENTICATED;

    return (
        <div className='
            min-h-[18%] sm:min-h-[7%] p-4 w-full
            flex flex-col sm:flex-row justify-center sm:justify-end items-center
            bg-secondary
        '>
            {isAuthenticated && <GoProfileButton />}
            {!isHomePath && <GoHomeButton />}
            {/* {!isAuthPath && <Search />} */}
            {isAuthenticated && !isAuthPath && <LogoutButton />}
            {!isAuthenticated && !isAuthPath && < LoginButton />}
            <ToggleThemeButton />
        </div>
    );
};
