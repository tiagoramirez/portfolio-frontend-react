import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { Education, Experience, User } from '../../modules/portfolio';

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
        notLoading: (state) => {
            state.loading = false;
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
        addEducation: (state, { payload }: PayloadAction<{ education: Education, msg: string }>) => {
            state.activeUser.educations.push(payload.education);
            Swal.fire('Portfolio | Education', payload.msg, 'success');
            state.loading = false;
        },
        editEducation: (state, { payload }: PayloadAction<{ education: Education, msg: string }>) => {
            state.activeUser.educations = state.activeUser.educations.map(ed => ed.id === payload.education.id ? payload.education : ed);
            Swal.fire('Portfolio | Education', payload.msg, 'success');
            state.loading = false;
        },
        removeEducation: (state, { payload }: PayloadAction<{ id: string, msg: string }>) => {
            state.activeUser.educations = state.activeUser.educations.filter(ed => ed.id !== payload.id);
            Swal.fire('Portfolio | Education', payload.msg, 'success');
            state.loading = false;
        },
        addExperience: (state, { payload }: PayloadAction<{ experience: Experience, msg: string }>) => {
            state.activeUser.experiences.push(payload.experience);
            Swal.fire('Portfolio | Experience', payload.msg, 'success');
            state.loading = false;
        },
        editExperience: (state, { payload }: PayloadAction<{ experience: Experience, msg: string }>) => {
            state.activeUser.experiences = state.activeUser.experiences.map(ed => ed.id === payload.experience.id ? payload.experience : ed);
            Swal.fire('Portfolio | Experience', payload.msg, 'success');
            state.loading = false;
        },
        removeExperience: (state, { payload }: PayloadAction<{ id: string, msg: string }>) => {
            state.activeUser.experiences = state.activeUser.experiences.filter(ed => ed.id !== payload.id);
            Swal.fire('Portfolio | Experience', payload.msg, 'success');
            state.loading = false;
        }
    },
});

export const {
    loading,
    notLoading,
    setActiveUser,
    setTotalUsers,
    setUsers,
    toggleEnglishMode,
    addEducation,
    editEducation,
    removeEducation,
    addExperience,
    editExperience,
    removeExperience
} = portfolioSlice.actions;