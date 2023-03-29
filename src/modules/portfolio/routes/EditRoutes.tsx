import { Navigate, Route, Routes } from 'react-router-dom';
import { usePathInfo } from '../../../hooks';
import { EducationView, HandleEducationPage } from '../education';
import { ExperienceView, HandleExperiencePage } from '../experience';
import { HandleAboutMePage, HandleProfilePage } from '../profile';
import { HandleProjectPage, ProjectView } from '../project';
import { HandleSocialMediaPage, SocialMediaListPage } from '../social-media';

export const EditRoutes = () => {

    const { isOwnProfile } = usePathInfo();

    return (
        <Routes>
            {
                isOwnProfile &&
                <>
                    <Route path='about-me' element={<HandleAboutMePage />} />
                    <Route path='educations' element={<EducationView showActionButtons />} />
                    <Route path='educations/:id' element={<HandleEducationPage />} />
                    <Route path='educations/add' element={<HandleEducationPage />} />
                    <Route path='experiences' element={<ExperienceView showActionButtons />} />
                    <Route path='experiences/:id' element={<HandleExperiencePage />} />
                    <Route path='experiences/add' element={<HandleExperiencePage />} />
                    <Route path='profile' element={<HandleProfilePage />} />
                    <Route path='projects' element={<ProjectView showActionButtons />} />
                    <Route path='projects/:id' element={<HandleProjectPage />} />
                    <Route path='projects/add' element={<HandleProjectPage />} />
                    <Route path='skills' element={<p>Hola skills 1</p>} />
                    <Route path='skills/:id' element={<p>Hola skills 2</p>} />
                    <Route path='skills/add' element={<p>Hola skills 3</p>} />
                    <Route path='social-media' element={<SocialMediaListPage />} />
                    <Route path='social-media/:id' element={<HandleSocialMediaPage />} />
                    <Route path='social-media/add' element={<HandleSocialMediaPage />} />
                </>
            }
            <Route path='*' element={< Navigate to='/' />} />
        </Routes >
    );
};