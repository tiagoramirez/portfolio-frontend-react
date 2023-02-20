import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { Education, Experience, ProfileInfo, Project, User } from '../../modules/portfolio';

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
            state.activeUser.experiences = state.activeUser.experiences.map(exp => exp.id === payload.experience.id ? payload.experience : exp);
            Swal.fire('Portfolio | Experience', payload.msg, 'success');
            state.loading = false;
        },
        removeExperience: (state, { payload }: PayloadAction<{ id: string, msg: string }>) => {
            state.activeUser.experiences = state.activeUser.experiences.filter(exp => exp.id !== payload.id);
            Swal.fire('Portfolio | Experience', payload.msg, 'success');
            state.loading = false;
        },
        addProject: (state, { payload }: PayloadAction<{ project: Project, msg: string }>) => {
            state.activeUser.projects.push(payload.project);
            Swal.fire('Portfolio | Project', payload.msg, 'success');
            state.loading = false;
        },
        editProject: (state, { payload }: PayloadAction<{ project: Project, msg: string }>) => {
            state.activeUser.projects = state.activeUser.projects.map(proj => proj.id === payload.project.id ? payload.project : proj);
            Swal.fire('Portfolio | Project', payload.msg, 'success');
            state.loading = false;
        },
        removeProject: (state, { payload }: PayloadAction<{ id: string, msg: string }>) => {
            state.activeUser.projects = state.activeUser.projects.filter(proj => proj.id !== payload.id);
            Swal.fire('Portfolio | Project', payload.msg, 'success');
            state.loading = false;
        },
        editProfile: (state, { payload }: PayloadAction<{ profileInfo: ProfileInfo, msg: string }>) => {
            state.activeUser = {
                ...payload.profileInfo,
                educations: state.activeUser.educations,
                experiences: state.activeUser.experiences,
                projects: state.activeUser.projects,
                socialMedias: state.activeUser.socialMedias,
                skills: state.activeUser.skills,
            };
            Swal.fire('Portfolio | Profile', payload.msg, 'success');
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
    removeExperience,
    addProject,
    editProject,
    removeProject,
    editProfile,
} = portfolioSlice.actions;