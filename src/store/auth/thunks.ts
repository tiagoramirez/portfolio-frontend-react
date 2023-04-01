import { getIsRegistered, getIsUsernameAvailable, getUsername, postLogin, postRegister } from '../../api';
import { loginUserWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from '../../firebase';
import { handleAxiosError } from '../helper';
import { AppDispatch, RootState } from '../types';
import { AuthState, checkingCredentials, authError, login, logout } from './authSlice';
import { errorCodeToString, StatusType } from './helpers';

export const startSettingToken = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        const email = getState().auth.email;
        const id = getState().auth.id;
        const username = getState().auth.username;

        try {
            const { data: token } = await postLogin({ email, id, username });
            localStorage.setItem('AUTH_TKN', token);
        }
        catch (err: unknown) {
            const msg = handleAxiosError(err);
            dispatch(authError(msg));
        }
    };
};

export const startRegisterUserFirebase = (params: { name: string, username: string, email: string, password: string }) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());
        const { email, password, username, name } = params;

        try {
            const { data: isUsernameAvailable } = await getIsUsernameAvailable(username);
            if (!isUsernameAvailable) return dispatch(authError('Usuario no disponible'));

            const { ok, errorCode, uid: id } = await registerUserWithEmailPassword(email, password);

            if (!ok) return dispatch(authError(errorCodeToString(errorCode)));

            return dispatch(startRegisterUserBackend({ id, email, username, name }));
        }
        catch (err: unknown) {
            const msg = handleAxiosError(err);
            dispatch(authError(msg));
        }
    };
};

export const startRegisterUserBackend = (params: { id: string, email: string, username: string, name: string }) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        try {
            await postRegister(params);

            const { email, id, username } = params;

            const loginValues: AuthState = { id, username, email, status: StatusType.AUTHENTICATED };

            dispatch(login(loginValues));

            await dispatch(startSettingToken());
        }
        catch (err: unknown) {
            const msg = handleAxiosError(err);
            dispatch(authError(msg));
        }
    };
};


export const startLoginWithEmailPassword = ({ email, password }: { email: string, password: string }) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid: id, errorCode } = await loginUserWithEmailPassword(email, password);

        if (!ok) return dispatch(authError(errorCodeToString(errorCode)));

        try {
            const { data: username } = await getUsername({ id, email });

            const loginValues: AuthState = { status: StatusType.AUTHENTICATED, id, email, username };

            dispatch(login(loginValues));

            return await dispatch(startSettingToken());
        }
        catch (err: unknown) {
            const msg = handleAxiosError(err);
            dispatch(authError(msg));
        }
    };
};

export const startGoogleSignIn = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid: id, email, errorCode } = await signInWithGoogle();

        if (!ok) return dispatch(authError(errorCodeToString(errorCode)));

        try {
            const { data: isRegistered } = await getIsRegistered({ id, email });

            if (isRegistered) {
                const { data: username } = await getUsername({ id, email });

                const loginValues: AuthState = { id, username, email, status: StatusType.AUTHENTICATED };

                dispatch(login(loginValues));

                await dispatch(startSettingToken());
            }
            else {
                const loginValues: AuthState = { id, username: '', email, status: StatusType.NOT_REGISTERED };

                dispatch(login(loginValues));
            }
        }
        catch (err: unknown) {
            const msg = handleAxiosError(err);
            dispatch(authError(msg));
        }
    };
};

export const startGettingInfoWhenAlreadyLogged = ({ email, id }: { email: string, id: string }) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        try {
            const { data: username } = await getUsername({ id, email });

            const loginValues: AuthState = { status: StatusType.AUTHENTICATED, id, email, username };

            dispatch(login(loginValues));

            await dispatch(startSettingToken());
        }
        catch (err: unknown) {
            const msg = handleAxiosError(err);
            dispatch(authError(msg));
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