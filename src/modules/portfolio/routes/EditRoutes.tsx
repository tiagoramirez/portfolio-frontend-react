import { Navigate, Route, Routes } from 'react-router-dom';
import { usePathInfo } from '../../../hooks';
import { EducationListPage, HandleEducationPage } from '../education';
import { ExperienceListPage, HandleExperiencePage } from '../experience';
import { HandleAboutMePage, HandleProfilePage } from '../profile';
import { HandleProjectPage, ProjectListPage } from '../project';
import { HandleSocialMediaPage, SocialMediaListPage } from '../social-media';
import { HandleSkillPage, SkillListPage } from '../skill';

export const EditRoutes = () => {

    const { isOwnProfile } = usePathInfo();

    return (
        <Routes>
            {
                isOwnProfile &&
                <>
                    <Route path='about-me' element={<HandleAboutMePage />} />
                    <Route path='educations' element={<EducationListPage />} />
                    <Route path='educations/:id' element={<HandleEducationPage />} />
                    <Route path='educations/add' element={<HandleEducationPage />} />
                    <Route path='experiences' element={<ExperienceListPage />} />
                    <Route path='experiences/:id' element={<HandleExperiencePage />} />
                    <Route path='experiences/add' element={<HandleExperiencePage />} />
                    <Route path='profile' element={<HandleProfilePage />} />
                    <Route path='projects' element={<ProjectListPage />} />
                    <Route path='projects/:id' element={<HandleProjectPage />} />
                    <Route path='projects/add' element={<HandleProjectPage />} />
                    <Route path='skills' element={<SkillListPage />} />
                    <Route path='skills/:id' element={<HandleSkillPage />} />
                    <Route path='skills/add' element={<HandleSkillPage />} />
                    <Route path='social-media' element={<SocialMediaListPage />} />
                    <Route path='social-media/:id' element={<HandleSocialMediaPage />} />
                    <Route path='social-media/add' element={<HandleSocialMediaPage />} />
                </>
            }
            <Route path='*' element={< Navigate to='/' />} />
        </Routes >
    );
};