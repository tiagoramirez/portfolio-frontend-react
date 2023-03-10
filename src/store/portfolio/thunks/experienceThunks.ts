import { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';
import { deleteExperience, postExperience, putExperience } from '../../../api';
import { Experience } from '../../../modules/portfolio';
import { AppDispatch } from '../../types';
import { addExperience, editExperience, loading, notLoading, removeExperience } from '../portfolioSlice';

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

export const startUpdatingExperience = (experience: Experience, onRedirect: () => void) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await putExperience(experience, experience.id as string);
            const { msg } = data;
            dispatch(editExperience({ experience, msg }));
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

export const startDeletingExperience = (id: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await deleteExperience(id);
            const { msg } = data;
            dispatch(removeExperience({ id, msg }));
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