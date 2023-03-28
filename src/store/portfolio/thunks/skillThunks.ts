import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { deleteSkill, getSkill, postSkill, putSkill } from '../../../api';
import { UserSkill } from '../../../modules/portfolio';
import { AppDispatch } from '../../types';
import { addSkill, editSkill, loading, notLoading, removeSkill } from '../portfolioSlice';

export const startGettingSkillsInfo = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data: SkillsInfo } = await getSkill();
            return SkillsInfo;
        }
        catch (err: unknown) {
            console.error('Error de axios: ');
            console.error(err);
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                toast.error(msg);
                return dispatch(notLoading());
            }
            else {
                const msg = error.message;
                toast.error(msg);
                return dispatch(notLoading());
            }
        }
    };
};

export const startAddingSkill = (skill: UserSkill, onRedirect: () => void) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await postSkill(skill);
            const { id, msg } = data;
            skill.id = id;
            dispatch(addSkill({ skill, msg }));
            onRedirect();
        }
        catch (err: unknown) {
            console.error('Error de axios: ');
            console.error(err);
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                toast.error(msg);
                return dispatch(notLoading());
            }
            else {
                const msg = error.message;
                toast.error(msg);
                return dispatch(notLoading());
            }
        }
    };
};

export const startUpdatingSkill = (skill: UserSkill, onRedirect: () => void) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await putSkill(skill, skill.id as string);
            const { msg } = data;
            dispatch(editSkill({ skill, msg }));
            onRedirect();
        }
        catch (err: unknown) {
            console.error('Error de axios: ');
            console.error(err);
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                toast.error(msg);
                return dispatch(notLoading());
            }
            else {
                const msg = error.message;
                toast.error(msg);
                return dispatch(notLoading());
            }
        }
    };
};


export const startDeletingSkill = (id: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await deleteSkill(id);
            const { msg } = data;
            dispatch(removeSkill({ id, msg }));
        }
        catch (err: unknown) {
            console.error('Error de axios: ');
            console.error(err);
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                toast.error(msg);
                return dispatch(notLoading());
            }
            else {
                const msg = error.message;
                toast.error(msg);
                return dispatch(notLoading());
            }
        }
    };
};