import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { errorCodeToString, StatusType } from './helpers';

export interface AuthState {
    id: string;
    username: string;
    email: string;
    status: StatusType;
}

const initialState: AuthState = {
    id: '',
    username: '',
    email: '',
    status: StatusType.NOT_AUTHENTICATED
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }: PayloadAction<AuthState>) => {
            state.id = payload.id;
            state.username = payload.username;
            state.email = payload.email;
            state.status = payload.status;
        },
        logout: (state, { payload }: PayloadAction<string>) => {
            state.id = initialState.id;
            state.username = initialState.username;
            state.email = initialState.email;
            Swal.fire('Autenticacion', payload, 'info');
            state.status = StatusType.NOT_AUTHENTICATED;
        },
        firebaseError: (state, { payload }: PayloadAction<string>) => {
            state.id = initialState.id;
            state.username = initialState.username;
            state.email = initialState.email;
            Swal.fire('Autenticacion', errorCodeToString(payload), 'error');
            state.status = StatusType.NOT_AUTHENTICATED;
        },
        backendError: (state, { payload }: PayloadAction<string>) => {
            state.id = initialState.id;
            state.username = initialState.username;
            state.email = initialState.email;
            Swal.fire('Autenticacion', payload, 'error');
            state.status = StatusType.NOT_AUTHENTICATED;
        },
        checkingCredentials(state) {
            state.status = StatusType.CHECKING;
        }
    }
});

export const { login, logout, checkingCredentials, firebaseError, backendError } = authSlice.actions;