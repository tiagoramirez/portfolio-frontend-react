import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../../../firebase';
import { notLogged, startGettingInfoWhenAlreadyLogged, useAppDispatch } from '../../../store';

export const useCheckAuth = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            localStorage.removeItem('AUTH_TKN');
            if (!user) return dispatch(notLogged());
            const { uid: id, email } = user;
            const loginValues = { id, email: email || '' };
            dispatch(startGettingInfoWhenAlreadyLogged(loginValues));
        });
    }, [dispatch]);
};