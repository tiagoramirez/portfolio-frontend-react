import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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

    const { isLoggedUserProfile } = useEdit();

    if (loading) {
        return <span className='loader'></span>;
    }

    return (
        <div className='mt-3 w-full flex flex-col items-center'>
            <ProfileView />
            {(activeUser.nativeAboutMe || isLoggedUserProfile) && <AboutMeView />}
            {(activeUser.experiences.length > 0 || isLoggedUserProfile) && <ExperienceView />}
            {(activeUser.educations.length > 0 || isLoggedUserProfile) && <EducationView />}
            {(activeUser.projects.length > 0 || isLoggedUserProfile) && <ProjectView />}
            {(activeUser.skills.length > 0 || isLoggedUserProfile) && <SkillView />}
        </div>
    );
};
