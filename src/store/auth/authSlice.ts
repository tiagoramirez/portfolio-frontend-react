import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { StatusType } from './helpers';

export interface AuthState {
    id: string;
    username: string;
    email: string;
    status: StatusType;
}

const initialState: AuthState =
    import.meta.env.DEV
        ?
        {
            id: import.meta.env.VITE_TIAGORAMIREZ_ID,
            username: 'tiagoramirez',
            email: 'tiagoramirez2001@gmail.com',
            status: StatusType.AUTHENTICATED
        }
        :
        {
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
            state.status = initialState.status;
            toast(payload, { icon: '👋' });
        },
        authError: (state, { payload }: PayloadAction<string>) => {
            state.id = initialState.id;
            state.username = initialState.username;
            state.email = initialState.email;
            state.status = initialState.status;
            toast.error(payload);
        },
        checkingCredentials: (state) => {
            state.status = StatusType.CHECKING;
        },
    }
});

export const { login, logout, authError, checkingCredentials } = authSlice.actions;