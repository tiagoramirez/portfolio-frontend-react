import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { errorCodeToString } from './errorCodeToString';
import { Status } from './status';

export interface AuthState {
    uid: string;
    username: string;
    status: Status;
}

const initialState: AuthState = {
    uid: '',
    username: '',
    status: Status.NOT_AUTHENTICATED
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }: PayloadAction<AuthState>) => {
            state.uid = payload.uid;
            state.username = payload.username;
            state.status = payload.status;
        },
        logout: (state, { payload }: PayloadAction<string>) => {
            state.uid = initialState.uid;
            state.username = initialState.username;
            Swal.fire('Autenticacion', payload, 'info');
            state.status = Status.NOT_AUTHENTICATED;
        },
        firebaseError: (state, { payload }: PayloadAction<string>) => {
            state.uid = initialState.uid;
            state.username = initialState.username;
            Swal.fire('Autenticacion', errorCodeToString(payload), 'error');
            state.status = Status.NOT_AUTHENTICATED;
        },
        backendError: (state, { payload }: PayloadAction<string>) => {
            state.uid = initialState.uid;
            state.username = initialState.username;
            Swal.fire('Autenticacion', payload, 'error');
            state.status = Status.NOT_AUTHENTICATED;
        },
        checkingCredentials(state) {
            state.status = Status.CHECKING;
        }
    }
});

export const { login, logout, checkingCredentials, firebaseError, backendError } = authSlice.actions;