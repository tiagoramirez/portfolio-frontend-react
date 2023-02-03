import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../modules/portfolio';

interface IUserInfo {
    name: string;
    username: string;
}

export interface PortfolioState {
    users: IUserInfo[];
    totalUsers: number;
    activeUser: User;
    loading: boolean;
    isEnglishMode: boolean;
    errorMessage?: string;
}

const initialState: PortfolioState = {
    users: [],
    totalUsers: 0,
    activeUser: new User(),
    loading: false,
    isEnglishMode: false,
    errorMessage: undefined
};

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setActiveUser: (state, { payload }: PayloadAction<User>) => {
            state.activeUser = payload;
            state.loading = false;
            state.isEnglishMode = false;
            state.errorMessage = undefined;
        },
        setTotalUsers: (state, { payload }: PayloadAction<number>) => {
            state.totalUsers = payload;
            // state.loading = false; !!!!!leave it commented
            state.errorMessage = undefined;
        },
        setUsers: (state, { payload }: PayloadAction<IUserInfo[]>) => {
            state.users = payload;
            state.loading = false;
            state.errorMessage = undefined;
        },
        toggleEnglishMode: (state) => {
            state.isEnglishMode = !state.isEnglishMode;
        },
        setError: (state, { payload }: PayloadAction<string>) => {
            state.users = initialState.users;
            state.totalUsers = initialState.totalUsers;
            state.activeUser = initialState.activeUser;
            state.loading = false;
            state.errorMessage = payload;
        },
        removeErrorMessage: (state) => {
            state.errorMessage = undefined;
        }
    },
});

export const { setLoading, setActiveUser, setTotalUsers, setUsers, toggleEnglishMode, setError, removeErrorMessage } = portfolioSlice.actions;