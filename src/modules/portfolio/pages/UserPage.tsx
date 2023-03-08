import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { usePathInfo } from '../../../hooks';
import { RootState, useAppDispatch } from '../../../store';
import { startGettingActiveUser } from '../../../store/portfolio';
import { ProfileView, AboutMeView, ExperienceView, EducationView, ProjectView, SkillView } from '../views';

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
        <div className='mt-3 w-full flex flex-col items-center'>
            <ProfileView />
            {(activeUser.nativeAboutMe || isOwnProfile) && <AboutMeView />}
            {(activeUser.experiences.length > 0 || isOwnProfile) && <ExperienceView />}
            {(activeUser.educations.length > 0 || isOwnProfile) && <EducationView />}
            {(activeUser.projects.length > 0 || isOwnProfile) && <ProjectView />}
            {(activeUser.skills.length > 0 || isOwnProfile) && <SkillView />}
        </div>
    );
};
