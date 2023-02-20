import { AxiosError } from 'axios';
import Swal from 'sweetalert2';
import { putProfile } from '../../../api/endpoints/profileEndpoint';
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