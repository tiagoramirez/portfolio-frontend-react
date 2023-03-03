import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { RootState, StatusType } from '../../store';

export const usePathInfo = () => {

    const { pathname } = useLocation();

    const { username: usernameFromParam } = useParams();

    const { status, username: usernameFromAuth } = useSelector((state: RootState) => state.auth);

    const isAuthPath = pathname.split('/').includes('auth');

    const isHomePath = pathname === '/';

    const isAuthenticated = status == StatusType.AUTHENTICATED;

    const isOwnProfile = usernameFromParam === usernameFromAuth;

    return {
        isAuthPath,
        isHomePath,
        isAuthenticated,
        isOwnProfile
    };
};