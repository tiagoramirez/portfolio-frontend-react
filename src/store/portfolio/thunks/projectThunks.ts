import { toast } from 'react-hot-toast';
import { deleteProject, postProject, putProject } from '../../../api';
import { Project } from '../../../modules/portfolio';
import { AppDispatch } from '../../types';
import { addProject, editProject, loading, notLoading, removeProject } from '../portfolioSlice';
import { handleAxiosError } from '../../helper';

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
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};

export const startUpdatingProject = (project: Project, onRedirect: () => void) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await putProject(project);
            const { msg } = data;
            dispatch(editProject({ project, msg }));
            onRedirect();
        }
        catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
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
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};