import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSocialMedia } from '../../../../../api';
import { RootState, useAppDispatch } from '../../../../../store';
import { startAddingSocialMedia, startUpdatingSocialMedia } from '../../../../../store/portfolio';
import { UserSocialMedia } from '../../../models';
import { SocialMedia } from '../../../models/SocialMedia';


export const useHandleSocialMedia = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [socialMedias, setSocialMedias] = useState<SocialMedia[]>([]);

    useEffect(() => {
        getSocialMedia().then(({ data }) => setSocialMedias(data));
    }, []);

    const { id, username } = useParams();

    const { activeUser, loading } = useSelector((state: RootState) => state.portfolio);

    if (id && activeUser.socialMedias.find(sm => sm.id === id) === undefined) {
        navigate(`/${username}`);
    }

    const socialMedia = id ? activeUser.socialMedias.find(sm => sm.id === id) as UserSocialMedia : new UserSocialMedia();

    const { register, handleSubmit, formState: { errors } } = useForm<UserSocialMedia>({ defaultValues: socialMedia });

    const onRedirect = () => navigate(`/${username}/edit/social-media`);

    const onSubmitSocialMedia: SubmitHandler<UserSocialMedia> = data => {
        data.socialMediaInfo = socialMedias.find(sm => sm.id === data.socialMediaId) as SocialMedia;
        console.log(data);

        if (id) {
            return dispatch(startUpdatingSocialMedia(data, onRedirect));
        }
        return dispatch(startAddingSocialMedia(data, onRedirect));
    };

    const onSubmit = handleSubmit(onSubmitSocialMedia);

    return {
        errors,
        loading,
        socialMedias,
        onSubmit,
        register
    };
};