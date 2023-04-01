import toast from 'react-hot-toast';
import { deleteSocialMedia, postSocialMedia, putSocialMedia } from '../../../api';
import { SocialMedia } from '../../../modules/portfolio';
import { AppDispatch } from '../../types';
import { addSocialMedia, editSocialMedia, loading, notLoading, removeSocialMedia } from '../portfolioSlice';
import { handleAxiosError } from '../../helper';

export const startAddingSocialMedia = (socialMedia: SocialMedia, onRedirect: () => void) => {
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
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};

export const startUpdatingSocialMedia = (socialMedia: SocialMedia, onRedirect: () => void) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await putSocialMedia(socialMedia);
            const { msg } = data;
            dispatch(editSocialMedia({ socialMedia, msg }));
            onRedirect();
        }
        catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
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
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};