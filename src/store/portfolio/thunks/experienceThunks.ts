import { toast } from 'react-hot-toast';
import { deleteExperience, postExperience, putExperience } from '../../../api';
import { Experience } from '../../../modules/portfolio';
import { AppDispatch } from '../../types';
import { addExperience, editExperience, loading, notLoading, removeExperience } from '../portfolioSlice';
import { handleAxiosError } from '../../helper';

export const startAddingExperience = (experience: Experience, onRedirect: () => void) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await postExperience(experience);
            const { id, msg } = data;
            experience.id = id;
            dispatch(addExperience({ experience, msg }));
            onRedirect();
        }
        catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};

export const startUpdatingExperience = (experience: Experience, onRedirect: () => void) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await putExperience(experience);
            const { msg } = data;
            dispatch(editExperience({ experience, msg }));
            onRedirect();
        }
        catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};

export const startDeletingExperience = (id: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await deleteExperience(id);
            const { msg } = data;
            dispatch(removeExperience({ id, msg }));
        }
        catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};