import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store';
import { startUpdatingProfile } from '../../../store/portfolio/thunks/profileThunks';
import { ProfileInfo } from '../models';

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

        if (!hasEnglishDesc) data.englishDesc = undefined;

        if (!hasEnglishAboutMe) data.englishAboutMe = undefined;

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