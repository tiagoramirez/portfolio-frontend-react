import { toast } from 'react-hot-toast';
import { putProfile } from '../../../api';
import { ProfileInfo } from '../../../modules/portfolio';
import { AppDispatch } from '../../types';
import { editProfile, loading, notLoading } from '../portfolioSlice';
import { handleAxiosError } from '../../helper';

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
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};