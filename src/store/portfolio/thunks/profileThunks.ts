import { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';
import { putProfile } from '../../../api';
import { ProfileInfo } from '../../../modules/portfolio';
import { AppDispatch } from '../../types';
import { editProfile, loading, notLoading } from '../portfolioSlice';

export const startUpdatingProfile = (profileInfo: ProfileInfo, onRedirect: () => void) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data } = await putProfile(profileInfo);
            const { msg } = data;
            dispatch(editProfile({ profileInfo, msg }));
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