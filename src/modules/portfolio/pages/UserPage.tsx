import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { usePathInfo } from '../../../hooks';
import { RootState, useAppDispatch } from '../../../store';
import { startGettingActiveUser } from '../../../store/portfolio';
import { ProfileView, AboutMeView, ExperienceView, EducationView, ProjectView, SkillView } from '../views';
import { SocialMediaView } from '../views/SocialMedia';

export const UserPage = () => {

    const dispatch = useAppDispatch();

    const { username, isOwnProfile } = usePathInfo();

    useEffect(() => {
        dispatch(startGettingActiveUser(username as string));
    }, [dispatch, username]);

    const { activeUser, loading } = useSelector((state: RootState) => state.portfolio);

    if (loading) {
        return <span className='loader'></span>;
    }

    return (
        <div className='w-full'>
            <ProfileView />
            {(activeUser.nativeAboutMe || isOwnProfile) && <AboutMeView />}
            {(activeUser.experiences.length > 0 || isOwnProfile) && <ExperienceView />}
            {(activeUser.educations.length > 0 || isOwnProfile) && <EducationView />}
            {(activeUser.projects.length > 0 || isOwnProfile) && <ProjectView />}
            {(activeUser.skills.length > 0 || isOwnProfile) && <SkillView />}
            {(activeUser.skills.length > 0 || isOwnProfile) && <SocialMediaView />}
        </div>
    );
};
