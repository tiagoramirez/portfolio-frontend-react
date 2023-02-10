import { AxiosError } from 'axios';
import { Education } from '../../modules/portfolio';
import { AppDispatch } from '../types';
import { getUser, getUsers, getUsersCount, postEducation, putEducation } from './helpers';
import { addEducation, editEducation, loading, setActiveUser, raiseError, setTotalUsers, setUsers } from './portfolioSlice';

export const startGettingUsers = (page = 0) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data: count } = await getUsersCount();
            dispatch(setTotalUsers(count));

            const { data: users } = await getUsers(page);
            return dispatch(setUsers(users));
        }
        catch (err: unknown) {
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                return dispatch(raiseError(msg));
            }
            else {
                const msg = error.message;
                return dispatch(raiseError(msg));
            }
        }
    };
};

export const startGettingActiveUser = (username: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data: user } = await getUser(username);
            return dispatch(setActiveUser(user));
        }
        catch (err: unknown) {
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                return dispatch(raiseError(msg));
            }
            else {
                const msg = error.message;
                return dispatch(raiseError(msg));
            }
        }
    };
};

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
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                return dispatch(raiseError(msg));
            }
            else {
                const msg = error.message;
                return dispatch(raiseError(msg));
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
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                return dispatch(raiseError(msg));
            }
            else {
                const msg = error.message;
                return dispatch(raiseError(msg));
            }
        }
    };
};