import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { FirebaseAuth } from '../firebase';
import { useAppDispatch } from '../store';
import { startGettingInfoWhenAlreadyLogged, startSettingToken } from '../store/auth';
import { setDarkMode } from '../store/theme';

// Usage: When app starts:
// 1) Sets dark mode
// 2) If exists an auth token in local storage, it starts to get all auth info based on firebase login
export const useStartApp = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setDarkMode());
        if (import.meta.env.DEV) {
            dispatch(startSettingToken());
        }
        else if (localStorage.getItem('AUTH_TKN')) {
            onAuthStateChanged(FirebaseAuth, (user) => {
                if (!user) return;
                dispatch(startGettingInfoWhenAlreadyLogged({ email: user.email || '', id: user.uid }));
            });
        }
    }, [dispatch]);
};