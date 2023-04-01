import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../../../store';
import { startAddingSocialMedia, startUpdatingSocialMedia } from '../../../../../store/portfolio';
import { SocialMedia } from '../../../models';

export const useHandleSocialMedia = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { id, username } = useParams();

    const { activeUser, loading } = useSelector((state: RootState) => state.portfolio);

    if (id && activeUser.socialMedias.find(({ id: smId }) => smId === id) === undefined) navigate(`/${username}`);

    const socialMedia = id ? activeUser.socialMedias.find(({ id: smId }) => smId === id) as SocialMedia : new SocialMedia();

    const { register, handleSubmit } = useForm<SocialMedia>({ defaultValues: socialMedia });

    const onRedirect = () => navigate(`/${username}/edit/social-media`);

    const onSubmitSocialMedia: SubmitHandler<SocialMedia> = data => {
        data.name = parseInt(data.name as unknown as string);

        if (id) {
            return dispatch(startUpdatingSocialMedia(data, onRedirect));
        }
        return dispatch(startAddingSocialMedia(data, onRedirect));
    };

    const onSubmit = handleSubmit(onSubmitSocialMedia);

    return {
        loading,
        onSubmit,
        register
    };
};