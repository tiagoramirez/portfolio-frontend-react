import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LoadingPage } from '../../../pages';
import { RootState, startGettingActiveUser, useAppDispatch } from '../../../store';
import { AboutMeView, EducationView, ExperienceView, ProfileView, ProjectView, SkillView } from '../views';

export const UserPage = () => {
    const { username } = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(startGettingActiveUser(username as string));
    }, [dispatch, username]);

    const { activeUser, loading } = useSelector((state: RootState) => state.portfolio);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <div className='mt-3 w-full flex flex-col items-center'>
            <ProfileView />
            {activeUser.nativeAboutMe && <AboutMeView />}
            {activeUser.experiences.length > 0 && <ExperienceView />}
            {activeUser.educations.length > 0 && <EducationView />}
            {activeUser.projects.length > 0 && <ProjectView />}
            {activeUser.skills.length > 0 && <SkillView />}
        </div>
    );
};
