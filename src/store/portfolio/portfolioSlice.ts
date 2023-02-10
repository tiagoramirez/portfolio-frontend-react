import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { Education, User } from '../../modules/portfolio';

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
}

const initialState: PortfolioState = {
    users: [],
    totalUsers: 0,
    activeUser: new User(),
    loading: false,
    isEnglishMode: false
};

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        loading: (state) => {
            state.loading = true;
        },
        setActiveUser: (state, { payload }: PayloadAction<User>) => {
            state.activeUser = payload;
            state.isEnglishMode = false;
            state.loading = false;
        },
        setTotalUsers: (state, { payload }: PayloadAction<number>) => {
            state.totalUsers = payload;
            // state.loading = false; !!!!!leave it commented
        },
        setUsers: (state, { payload }: PayloadAction<IUserInfo[]>) => {
            state.users = payload;
            state.loading = false;
        },
        toggleEnglishMode: (state) => {
            state.isEnglishMode = !state.isEnglishMode;
        },
        raiseError: (state, { payload }: PayloadAction<string>) => {
            Swal.fire('Portfolio', payload, 'error');
            state.loading = false;
        },
        addEducation: (state, { payload }: PayloadAction<{ education: Education, msg: string }>) => {
            state.activeUser.educations.push(payload.education);
            Swal.fire('Portfolio', payload.msg, 'success');
            state.loading = false;
        },
        editEducation: (state, { payload }: PayloadAction<{ education: Education, msg: string }>) => {
            state.activeUser.educations.forEach(ed => ed.id === payload.education.id ? payload : ed);
            Swal.fire('Portfolio', payload.msg, 'success');
            state.loading = false;
        }
    },
});

export const { loading, setActiveUser, setTotalUsers, setUsers, toggleEnglishMode, raiseError, addEducation, editEducation } = portfolioSlice.actions;