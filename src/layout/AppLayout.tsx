import { GoHomeButton, LoginButton, LogoutButton, ToggleThemeButton } from './components';
import { usePathInfo } from './hooks';

export const AppLayout = () => {
    const { isAuthPath, isAuthenticated, isHomePath } = usePathInfo();

    return (
        <div className='
            h-[18%] sm:h-[7%] p-2 w-full
            flex flex-col sm:flex-row justify-center sm:justify-end items-center
            shadow-sm shadow-black bg-secondary'
        >
            {!isHomePath && !isAuthPath && <GoHomeButton />}
            {/* {!isAuthPath && <Search />} */}
            {isAuthenticated && !isAuthPath && <LogoutButton />}
            {!isAuthenticated && !isAuthPath && < LoginButton />}
            <ToggleThemeButton />
        </div>
    );
};
