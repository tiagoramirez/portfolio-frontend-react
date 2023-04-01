import { toast } from 'react-hot-toast';
import { deleteEducation, postEducation, putEducation } from '../../../api';
import { Education } from '../../../modules/portfolio';
import { AppDispatch } from '../../types';
import { addEducation, editEducation, loading, notLoading, removeEducation } from '../portfolioSlice';
import { handleAxiosError } from '../../helper';

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
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};

export const startUpdatingEducation = (education: Education, onRedirect: () => void) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await putEducation(education);
            const { msg } = data;
            dispatch(editEducation({ education, msg }));
            onRedirect();
        }
        catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
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
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};