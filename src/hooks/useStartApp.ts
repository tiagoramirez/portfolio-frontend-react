import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { FirebaseAuth } from '../firebase';
import { setDarkMode, startGettingInfoWhenAlreadyLogged, useAppDispatch } from '../store';

export const useStartApp = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setDarkMode());
        if (localStorage.getItem('AUTH_TKN')) {
            onAuthStateChanged(FirebaseAuth, (user) => {
                if (!user) return;
                dispatch(startGettingInfoWhenAlreadyLogged({ email: user.email || '', id: user.uid }));
            });
        }
    }, [dispatch]);
};