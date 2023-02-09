import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LoadingPage } from '../../../pages';
import { RootState, startGettingActiveUser, useAppDispatch } from '../../../store';
import { useEdit } from '../hooks';
import { ProfileView, AboutMeView, ExperienceView, EducationView, ProjectView, SkillView } from '../views';

export const UserPage = () => {
    const { username } = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(startGettingActiveUser(username as string));
    }, [dispatch, username]);

    const { activeUser, loading } = useSelector((state: RootState) => state.portfolio);

    const { isSameUserParamAuth } = useEdit();

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <div className='mt-3 w-full flex flex-col items-center'>
            <ProfileView />
            {(activeUser.nativeAboutMe || isSameUserParamAuth) && <AboutMeView />}
            {(activeUser.experiences.length > 0 || isSameUserParamAuth) && <ExperienceView />}
            {(activeUser.educations.length > 0 || isSameUserParamAuth) && <EducationView />}
            {(activeUser.projects.length > 0 || isSameUserParamAuth) && <ProjectView />}
            {(activeUser.skills.length > 0 || isSameUserParamAuth) && <SkillView />}
        </div>
    );
};
