import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { RootState } from '../store';
import { StatusType } from '../store/auth';

// Usage: It is use to get info related to the path
export const usePathInfo = () => {

    const { pathname } = useLocation();

    const { username: usernameFromPath } = useParams();

    const { status, username: usernameFromAuth } = useSelector((state: RootState) => state.auth);

    const isHomePath = pathname === '/';

    const isAuthPath = pathname.split('/').includes('auth');

    const isEditPath = pathname.split('/').includes('edit');

    const isAuthenticated = status == StatusType.AUTHENTICATED;

    const isOwnProfile = usernameFromPath === usernameFromAuth;

    return {
        isAuthPath,
        isHomePath,
        isEditPath,
        isAuthenticated,
        isOwnProfile,
        username: usernameFromPath
    };
};