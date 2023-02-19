import { AxiosError } from 'axios';
import Swal from 'sweetalert2';
import { deleteProject, postProject, putProject } from '../../../api';
import { Project } from '../../../modules/portfolio';
import { AppDispatch } from '../../types';
import { addProject, editProject, loading, notLoading, removeProject } from '../portfolioSlice';

export const startAddingProject = (project: Project, onRedirect: () => void) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await postProject(project);
            const { id, msg } = data;
            project.id = id;
            dispatch(addProject({ project, msg }));
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

export const startUpdatingProject = (project: Project, onRedirect: () => void) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await putProject(project, project.id as string);
            const { msg } = data;
            dispatch(editProject({ project, msg }));
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

export const startDeletingProject = (id: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await deleteProject(id);
            const { msg } = data;
            dispatch(removeProject({ id, msg }));
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