import { useEdit } from '../hooks';
import { AboutMeView, EducationView, ExperienceView, ProfileView, ProjectView, SkillView } from '../views';

export const UserEditPage = () => {
    useEdit(); //This redirect if logged user is not the same as the one trying to edit 

    return (
        <div className='mt-3 w-full flex flex-col items-center'>
            <ProfileView />
            <AboutMeView />
            <ExperienceView />
            <EducationView />
            <ProjectView />
            <SkillView />
        </div>
    );
};
