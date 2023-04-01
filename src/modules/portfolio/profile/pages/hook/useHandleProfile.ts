import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../../../store';
import { startUpdatingProfile } from '../../../../../store/portfolio';
import { breaklineCount } from '../../../helpers';
import { ProfileInfo } from '../../../models';

export const useHandleProfile = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { activeUser, loading } = useSelector((state: RootState) => state.portfolio);

    const { register, handleSubmit, watch } = useForm<ProfileInfo>({
        defaultValues: {
            name: activeUser.name,
            email: activeUser.email,
            username: activeUser.username,
            isEnglishModeEnabled: activeUser.isEnglishModeEnabled,
            nativeDesc: activeUser.nativeDesc,
            hasEnglishDesc: activeUser.hasEnglishDesc,
            englishDesc: activeUser.englishDesc,
            locationCountry: activeUser.locationCountry,
            locationState: activeUser.locationState,
            nativeAboutMe: activeUser.nativeAboutMe,
            hasEnglishAboutMe: activeUser.hasEnglishAboutMe,
            englishAboutMe: activeUser.englishAboutMe
        }
    });

    const hasEnglishDesc = watch('hasEnglishDesc');

    const hasEnglishAboutMe = watch('hasEnglishAboutMe');

    const locationState = watch('locationState') as string;

    const locationCountry = watch('locationCountry') as string;

    const username = watch('username');

    const onRedirect = () => navigate(`/${username}`);

    const onSubmitProfile: SubmitHandler<ProfileInfo> = data => {
        if (breaklineCount(data.nativeDesc) > 2) return toast.error('El titular no puede tener mas de 3 lineas!');

        if (!hasEnglishDesc) data.englishDesc = undefined;
        else if (breaklineCount(data.englishDesc) > 2) return toast.error('Holder could not be more than 3 lines!');

        if (breaklineCount(data.nativeAboutMe) > 4) return toast.error('No puede tener mas de 5 lineas!');

        if (!hasEnglishAboutMe) data.englishAboutMe = undefined;
        else if (breaklineCount(data.englishAboutMe) > 4) return toast.error('Could not be more than 5 lines!');

        return dispatch(startUpdatingProfile(data, onRedirect));
    };

    const onSubmit = handleSubmit(onSubmitProfile);

    return {
        hasEnglishDesc,
        hasEnglishAboutMe,
        loading,
        locationState,
        locationCountry,
        register,
        onSubmit
    };
};