import { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';
import { deleteEducation, postEducation, putEducation } from '../../../api';
import { Education } from '../../../modules/portfolio';
import { AppDispatch } from '../../types';
import { addEducation, editEducation, loading, notLoading, removeEducation } from '../portfolioSlice';

export const startAddingEducation = (education: Education, onRedirect: () => void) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await postEducation(education);
            const { id, msg } = data;
            education.id = id;
            dispatch(addEducation({ education, msg }));
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

export const startUpdatingEducation = (education: Education, onRedirect: () => void) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await putEducation(education, education.id as string);
            const { msg } = data;
            dispatch(editEducation({ education, msg }));
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

export const startDeletingEducation = (id: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await deleteEducation(id);
            const { msg } = data;
            dispatch(removeEducation({ id, msg }));
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