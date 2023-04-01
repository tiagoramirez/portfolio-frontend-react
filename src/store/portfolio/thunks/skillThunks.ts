import toast from 'react-hot-toast';
import { deleteSkill, getSkill, postSkill, putSkill } from '../../../api';
import { UserSkill } from '../../../modules/portfolio';
import { AppDispatch } from '../../types';
import { addSkill, editSkill, loading, notLoading, removeSkill } from '../portfolioSlice';
import { handleAxiosError } from '../../helper';

export const startGettingSkillsInfo = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data: SkillsInfo } = await getSkill();
            return SkillsInfo;
        }
        catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
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
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};

export const startUpdatingSkill = (skill: UserSkill, onRedirect: () => void) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await putSkill(skill);
            const { msg } = data;
            dispatch(editSkill({ skill, msg }));
            onRedirect();
        }
        catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
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
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};