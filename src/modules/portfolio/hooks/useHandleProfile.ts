import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store';
import { startUpdatingProfile } from '../../../store/portfolio';
import { ProfileInfo } from '../models';
import { breaklineCount } from './helpers';

export const useHandleProfile = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { username } = useParams();

    const { activeUser, loading } = useSelector((state: RootState) => state.portfolio);

    const { register, handleSubmit, watch, formState: { errors } } = useForm<ProfileInfo>({
        defaultValues: {
            name: activeUser.name,
            email: activeUser.email,
            username: activeUser.username,
            isEnglishModeEnabled: activeUser.isEnglishModeEnabled,
            nativeDesc: activeUser.nativeDesc,
            hasEnglishDesc: activeUser.hasEnglishDesc,
            englishDesc: activeUser.englishDesc,
            phone: activeUser.phone,
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

    return {
        errors,
        handleSubmit,
        hasEnglishDesc,
        hasEnglishAboutMe,
        loading,
        onSubmitProfile,
        register,
        locationState,
        locationCountry,
    };
};