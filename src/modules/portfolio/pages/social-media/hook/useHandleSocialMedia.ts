import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../../../store';
import { startAddingSocialMedia, startUpdatingSocialMedia } from '../../../../../store/portfolio';
import { UserSocialMedia } from '../../../models';


export const useHandleSocialMedia = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { id, username } = useParams();

    const { activeUser, loading } = useSelector((state: RootState) => state.portfolio);

    if (id && activeUser.socialMedias.find(sm => sm.id === id) === undefined) {
        navigate(`/${username}`);
    }

    const socialMedia = id ? activeUser.socialMedias.find(sm => sm.id === id) as UserSocialMedia : new UserSocialMedia();

    const { register, handleSubmit, formState: { errors } } = useForm<UserSocialMedia>({ defaultValues: socialMedia });

    const onRedirect = () => navigate(`/${username}/edit/social-media`);

    const onSubmitSocialMedia: SubmitHandler<UserSocialMedia> = data => {
        if (id) {
            return dispatch(startUpdatingSocialMedia(data, onRedirect));
        }
        return dispatch(startAddingSocialMedia(data, onRedirect));
    };

    return {
        errors,
        handleSubmit,
        loading,
        onSubmitSocialMedia,
        register
    };
};