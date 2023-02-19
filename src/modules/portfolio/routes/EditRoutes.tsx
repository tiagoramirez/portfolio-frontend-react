import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoadingPage } from '../../../pages';
import { RootState } from '../../../store';
import { useEdit } from '../hooks';
import { HandleEducationPage, HandleExperiencePage, HandleProjectPage } from '../pages';
import { EducationView, ExperienceView, ProjectView } from '../views';

export const EditRoutes = () => {

    const { loading } = useSelector((state: RootState) => state.portfolio);

    const { isLoggedUserProfile } = useEdit();

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <Routes>
            {
                isLoggedUserProfile &&
                <>
                    <Route path='about-me' element={<p>Hola about</p>} />
                    <Route path='educations' element={<EducationView showActionButtons />} />
                    <Route path='educations/:id' element={<HandleEducationPage />} />
                    <Route path='educations/add' element={<HandleEducationPage />} />
                    <Route path='experiences' element={<ExperienceView showActionButtons />} />
                    <Route path='experiences/:id' element={<HandleExperiencePage />} />
                    <Route path='experiences/add' element={<HandleExperiencePage />} />
                    <Route path='profile' element={<p>Hola profile</p>} />
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