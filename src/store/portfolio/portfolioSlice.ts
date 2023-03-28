import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { Education, Experience, ProfileInfo, Project, User, UserSkill, UserSocialMedia } from '../../modules/portfolio';

export interface PortfolioState {
    users: { name: string; username: string; }[];
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
        setUsers: (state, { payload }: PayloadAction<{ name: string; username: string; }[]>) => {
            state.users = payload;
            state.loading = false;
        },
        toggleEnglishMode: (state) => {
            state.isEnglishMode = !state.isEnglishMode;
        },
        addEducation: (state, { payload }: PayloadAction<{ education: Education, msg: string }>) => {
            state.activeUser.educations.push(payload.education);
            toast.success(payload.msg);
            state.loading = false;
        },
        editEducation: (state, { payload }: PayloadAction<{ education: Education, msg: string }>) => {
            state.activeUser.educations = state.activeUser.educations.map(ed => ed.id === payload.education.id ? payload.education : ed);
            toast.success(payload.msg);
            state.loading = false;
        },
        removeEducation: (state, { payload }: PayloadAction<{ id: string, msg: string }>) => {
            state.activeUser.educations = state.activeUser.educations.filter(ed => ed.id !== payload.id);
            toast.success(payload.msg);
            state.loading = false;
        },
        addExperience: (state, { payload }: PayloadAction<{ experience: Experience, msg: string }>) => {
            state.activeUser.experiences.push(payload.experience);
            toast.success(payload.msg);
            state.loading = false;
        },
        editExperience: (state, { payload }: PayloadAction<{ experience: Experience, msg: string }>) => {
            state.activeUser.experiences = state.activeUser.experiences.map(exp => exp.id === payload.experience.id ? payload.experience : exp);
            toast.success(payload.msg);
            state.loading = false;
        },
        removeExperience: (state, { payload }: PayloadAction<{ id: string, msg: string }>) => {
            state.activeUser.experiences = state.activeUser.experiences.filter(exp => exp.id !== payload.id);
            toast.success(payload.msg);
            state.loading = false;
        },
        addProject: (state, { payload }: PayloadAction<{ project: Project, msg: string }>) => {
            state.activeUser.projects.push(payload.project);
            toast.success(payload.msg);
            state.loading = false;
        },
        editProject: (state, { payload }: PayloadAction<{ project: Project, msg: string }>) => {
            state.activeUser.projects = state.activeUser.projects.map(proj => proj.id === payload.project.id ? payload.project : proj);
            toast.success(payload.msg);
            state.loading = false;
        },
        removeProject: (state, { payload }: PayloadAction<{ id: string, msg: string }>) => {
            state.activeUser.projects = state.activeUser.projects.filter(proj => proj.id !== payload.id);
            toast.success(payload.msg);
            state.loading = false;
        },
        addSocialMedia: (state, { payload }: PayloadAction<{ socialMedia: UserSocialMedia, msg: string }>) => {
            state.activeUser.socialMedias.push(payload.socialMedia);
            toast.success(payload.msg);
            state.loading = false;
        },
        editSocialMedia: (state, { payload }: PayloadAction<{ socialMedia: UserSocialMedia, msg: string }>) => {
            state.activeUser.socialMedias = state.activeUser.socialMedias.map(sm => sm.id === payload.socialMedia.id ? payload.socialMedia : sm);
            toast.success(payload.msg);
            state.loading = false;
        },
        removeSocialMedia: (state, { payload }: PayloadAction<{ id: string, msg: string }>) => {
            state.activeUser.socialMedias = state.activeUser.socialMedias.filter(sm => sm.id !== payload.id);
            toast.success(payload.msg);
            state.loading = false;
        },
        addSkill: (state, { payload }: PayloadAction<{ skill: UserSkill, msg: string }>) => {
            state.activeUser.skills.push(payload.skill);
            toast.success(payload.msg);
            state.loading = false;
        },
        editSkill: (state, { payload }: PayloadAction<{ skill: UserSkill, msg: string }>) => {
            state.activeUser.skills = state.activeUser.skills.map(skl => skl.id === payload.skill.id ? payload.skill : skl);
            toast.success(payload.msg);
            state.loading = false;
        },
        removeSkill: (state, { payload }: PayloadAction<{ id: string, msg: string }>) => {
            state.activeUser.skills = state.activeUser.skills.filter(skl => skl.id !== payload.id);
            toast.success(payload.msg);
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
            toast.success(payload.msg);
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
    addSocialMedia,
    editSocialMedia,
    removeSocialMedia,
    addSkill,
    editSkill,
    removeSkill,
    editProfile,
} = portfolioSlice.actions;