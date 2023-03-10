import { AxiosError } from 'axios';
import { getIsRegistered, getIsUsernameAvailable, getTokenLogin, getUsername, registerUserBackend } from '../../api';
import { loginUserWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from '../../firebase';
import { AppDispatch } from '../types';
import { AuthState, backendError, checkingCredentials, firebaseError, login, logout } from './authSlice';
import { errorCodeToString, StatusType } from './helpers';

export const startRegisterUserBackend = (params: { id: string, email: string, username: string, name: string }) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        try {
            await registerUserBackend(params);

            const { email, id, username } = params;

            const { data: token } = await getTokenLogin({ email, id, username });

            localStorage.setItem('AUTH_TKN', token);

            const loginValues: AuthState = { id, username, email, status: StatusType.AUTHENTICATED };

            return dispatch(login(loginValues));
        }
        catch (err: unknown) {
            console.error('Error de Axios: ');
            console.error(err);
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                return dispatch(backendError(msg));
            }
            else {
                const msg = error.message;
                return dispatch(backendError(msg));
            }
        }
    };
};

export const startRegisterUserFirebase = (params: { name: string, username: string, email: string, password: string }) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const { email, password, username, name } = params;

        const { data: isUsernameAvailable } = await getIsUsernameAvailable(username);

        if (!isUsernameAvailable) return dispatch(backendError('Usuario no disponible'));

        const { ok, errorCode, uid: id } = await registerUserWithEmailPassword(email, password);

        if (!ok) return dispatch(firebaseError(errorCodeToString(errorCode)));

        return dispatch(startRegisterUserBackend({ id, email, username, name }));
    };
};

export const startLoginWithEmailPassword = ({ email, password }: { email: string, password: string }) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid: id, errorCode } = await loginUserWithEmailPassword(email, password);

        if (!ok) return dispatch(firebaseError(errorCodeToString(errorCode)));

        try {
            const { data: username } = await getUsername({ id, email });

            const { data: token } = await getTokenLogin({ id, email, username });

            localStorage.setItem('AUTH_TKN', token);

            const loginValues: AuthState = { status: StatusType.AUTHENTICATED, id, email, username };

            return dispatch(login(loginValues));
        }
        catch (err: unknown) {
            console.error('Error de Axios: ');
            console.error(err);
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                return dispatch(backendError(msg));
            }
            else {
                const msg = error.message;
                return dispatch(backendError(msg));
            }
        }
    };
};

export const startGoogleSignIn = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid: id, email, errorCode } = await signInWithGoogle();

        if (!ok) return dispatch(firebaseError(errorCodeToString(errorCode)));

        try {
            const { data: isRegistered } = await getIsRegistered({ id, email });

            if (isRegistered) {
                const { data: username } = await getUsername({ id, email });

                const { data: token } = await getTokenLogin({ id, email, username });

                localStorage.setItem('AUTH_TKN', token);

                const loginValues: AuthState = { id, username, email, status: StatusType.AUTHENTICATED };

                dispatch(login(loginValues));
            }
            else {
                const loginValues: AuthState = { id, username: '', email, status: StatusType.NOT_REGISTERED };

                dispatch(login(loginValues));
            }
        }
        catch (err: unknown) {
            console.error('Error de Axios: ');
            console.error(err);
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                return dispatch(backendError(msg));
            }
            else {
                const msg = error.message;
                return dispatch(backendError(msg));
            }
        }
    };
};

export const startGettingInfoWhenAlreadyLogged = ({ email, id }: { email: string, id: string }) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        try {
            const { data: username } = await getUsername({ id, email });

            const { data: token } = await getTokenLogin({ id, email, username });

            localStorage.setItem('AUTH_TKN', token);

            const loginValues: AuthState = { status: StatusType.AUTHENTICATED, id, email, username };

            return dispatch(login(loginValues));
        }
        catch (err: unknown) {
            console.error('Error de Axios: ');
            console.error(err);
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                return dispatch(backendError(msg));
            }
            else {
                const msg = error.message;
                return dispatch(backendError(msg));
            }
        }
    };
};

export const startLogout = (logoutMsg = 'Sesion cerrada') => {
    return async (dispatch: AppDispatch) => {
        await logoutFirebase();
        localStorage.removeItem('AUTH_TKN');
        dispatch(logout(logoutMsg));
    };
};