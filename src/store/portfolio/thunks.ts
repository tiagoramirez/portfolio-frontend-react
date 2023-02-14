import { AxiosError } from 'axios';
import Swal from 'sweetalert2';
import { Education } from '../../modules/portfolio';
import { AppDispatch } from '../types';
import { deleteEducation, getUser, getUsers, getUsersCount, postEducation, putEducation } from '../../api';
import { addEducation, editEducation, loading, setActiveUser, setTotalUsers, setUsers, notLoading, removeEducation } from './portfolioSlice';

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
                await Swal.fire({
                    title: 'Portfolio',
                    text: msg,
                    icon: 'error',
                    confirmButtonText: 'Recargar pagina'
                });
                window.location.reload();
            }
            else {
                const msg = error.message;
                await Swal.fire({
                    title: 'Portfolio',
                    text: msg,
                    icon: 'error',
                    confirmButtonText: 'Recargar pagina'
                });
                window.location.reload();
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
                await Swal.fire({
                    title: 'Portfolio',
                    text: msg,
                    icon: 'error',
                    confirmButtonText: 'Recargar pagina'
                });
                window.location.reload();
            }
            else {
                const msg = error.message;
                await Swal.fire({
                    title: 'Portfolio',
                    text: msg,
                    icon: 'error',
                    confirmButtonText: 'Recargar pagina'
                });
                window.location.reload();
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
                await Swal.fire('Portfolio', msg, 'error');
                return dispatch(notLoading());
            }
            else {
                const msg = error.message;
                await Swal.fire('Portfolio', msg, 'error');
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
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                await Swal.fire('Portfolio', msg, 'error');
                return dispatch(notLoading());
            }
            else {
                const msg = error.message;
                await Swal.fire('Portfolio', msg, 'error');
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
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                await Swal.fire('Portfolio', msg, 'error');
                return dispatch(notLoading());
            }
            else {
                const msg = error.message;
                await Swal.fire('Portfolio', msg, 'error');
                return dispatch(notLoading());
            }
        }
    };
};