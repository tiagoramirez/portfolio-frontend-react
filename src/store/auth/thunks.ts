import { AxiosError, AxiosResponse } from 'axios';
import { portfolioApi } from '../../api';
import { loginUserWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from '../../firebase';
import { AppDispatch } from '../types';
import { AuthState, backendError, checkingCredentials, firebaseError, login, logout } from './authSlice';
import { Status } from './status';

export const registerUserBackend = async (uid: string, email: string, username: string, name: string): Promise<AxiosResponse> => {
    const registerUserEndpoint = '/Auth/Register';
    return await portfolioApi.post(registerUserEndpoint, { email, username, name, id: uid });
};

const getUsername = async (email: string, uid: string): Promise<AxiosResponse<string>> => {
    const getUsernameEndpoint = `/User?email=${email}&id=${uid}`;
    return await portfolioApi.get<string>(getUsernameEndpoint);
};

const getIsRegistered = async (email: string, uid: string): Promise<AxiosResponse<boolean>> => {
    const isRegisteredBackendEndpoint = `/Auth/Registered?email=${email}&id=${uid}`;
    return await portfolioApi.get<boolean>(isRegisteredBackendEndpoint);
};

export const startRegisterUserWithEmailPassword = (name: string, username: string, email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const { ok, errorCode, uid } = await registerUserWithEmailPassword(email, password);

        if (!ok) return dispatch(firebaseError(errorCode));

        try {
            await registerUserBackend(uid, email, username, name);

            const loginValues: AuthState = {
                uid,
                username,
                status: Status.AUTHENTICATED
            };

            return dispatch(login(loginValues));
        }
        catch (err: unknown) {
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

export const startLoginWithEmailPassword = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, errorCode } = await loginUserWithEmailPassword(email, password);

        if (!ok) return dispatch(firebaseError(errorCode));

        try {
            const { data: username } = await getUsername(email, uid);

            const loginValues: AuthState = {
                status: Status.AUTHENTICATED,
                uid,
                username
            };

            return dispatch(login(loginValues));
        }
        catch (err: unknown) {
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

        const { ok, uid, email, errorCode } = await signInWithGoogle();

        if (!ok) return dispatch(firebaseError(errorCode));

        try {
            const { data: isRegistered } = await getIsRegistered(email, uid);

            if (isRegistered) {
                const { data: username } = await getUsername(email, uid);

                const loginValues: AuthState = {
                    uid,
                    username,
                    status: Status.AUTHENTICATED
                };
                dispatch(login(loginValues));
            }
            else {
                const loginValues: AuthState = {
                    uid,
                    username: '',
                    status: Status.NOT_REGISTERED
                };
                dispatch(login(loginValues));
            }
        }
        catch (err: unknown) {
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
        dispatch(logout(logoutMsg));
    };
};