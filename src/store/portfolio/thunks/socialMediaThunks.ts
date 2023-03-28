import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { deleteSocialMedia, getSocialMedia, postSocialMedia, putSocialMedia } from '../../../api';
import { UserSocialMedia } from '../../../modules/portfolio';
import { AppDispatch } from '../../types';
import { addSocialMedia, editSocialMedia, loading, notLoading, removeSocialMedia } from '../portfolioSlice';

export const startGettingSocialMediasInfo = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data: socialMediasInfo } = await getSocialMedia();
            return socialMediasInfo;
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

export const startAddingSocialMedia = (socialMedia: UserSocialMedia, onRedirect: () => void) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await postSocialMedia(socialMedia);
            const { id, msg } = data;
            socialMedia.id = id;
            dispatch(addSocialMedia({ socialMedia, msg }));
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

export const startUpdatingSocialMedia = (socialMedia: UserSocialMedia, onRedirect: () => void) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await putSocialMedia(socialMedia, socialMedia.id as string);
            const { msg } = data;
            dispatch(editSocialMedia({ socialMedia, msg }));
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


export const startDeletingSocialMedia = (id: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await deleteSocialMedia(id);
            const { msg } = data;
            dispatch(removeSocialMedia({ id, msg }));
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