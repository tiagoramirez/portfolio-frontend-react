import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { usePathInfo } from '../../../../hooks';
import { RootState, useAppDispatch } from '../../../../store';
import { startGettingActiveUser } from '../../../../store/portfolio';
import { EducationView } from '../../education';
import { ExperienceView } from '../../experience';
import { AboutMeView, ProfileView } from '../../profile';
import { ProjectView } from '../../project';
import { SkillView } from '../../skill';
import { SocialMediaView } from '../../social-media';

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
        <>
            <ProfileView />
            {(activeUser.nativeAboutMe || isOwnProfile) && <AboutMeView />}
            {(activeUser.experiences.length > 0 || isOwnProfile) && <ExperienceView />}
            {(activeUser.educations.length > 0 || isOwnProfile) && <EducationView />}
            {(activeUser.projects.length > 0 || isOwnProfile) && <ProjectView />}
            {(activeUser.skills.length > 0 || isOwnProfile) && <SkillView />}
            {(activeUser.skills.length > 0 || isOwnProfile) && <SocialMediaView />}
        </>
    );
};
