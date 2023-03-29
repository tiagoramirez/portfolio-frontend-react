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
        <nav>
            {isAuthenticated && <GoProfileButton />}
            {!isHomePath && <GoHomeButton />}
            {/* {!isAuthPath && <Search />} */}
            {isAuthenticated && !isAuthPath && <LogoutButton />}
            {!isAuthenticated && !isAuthPath && < LoginButton />}
            <ToggleThemeButton />
        </nav>
    );
};
