import { Navigate, Route, Routes } from 'react-router-dom';
import { useEdit } from '../hooks';
import { HandleEducationPage, HandleExperiencePage, HandleProfilePage, HandleProjectPage } from '../pages';
import { EducationView, ExperienceView, ProjectView } from '../views';

export const EditRoutes = () => {

    const { isLoggedUserProfile } = useEdit();

    return (
        <Routes>
            {
                isLoggedUserProfile &&
                <>
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
                </>
            }
            <Route path='*' element={< Navigate to='/' />} />
        </Routes >
    );
};