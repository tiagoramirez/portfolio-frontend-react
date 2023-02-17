import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoadingPage } from '../../../pages';
import { RootState } from '../../../store';
import { useEdit } from '../hooks';
import { HandleEducationPage } from '../pages';
import { EducationView } from '../views';

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
                    <Route path='educations' element={<EducationView isEdit />} />
                    <Route path='educations/:id' element={<HandleEducationPage />} />
                    <Route path='educations/add' element={<HandleEducationPage />} />
                    <Route path='experiences' element={<p>Hola experiences 1</p>} />
                    <Route path='experiences/:id' element={<p>Hola experiences 2</p>} />
                    <Route path='experiences/add' element={<p>Hola experiences 3</p>} />
                    <Route path='profile' element={<p>Hola profile</p>} />
                    <Route path='projects' element={<p>Hola projects 1</p>} />
                    <Route path='projects/:id' element={<p>Hola projects 2</p>} />
                    <Route path='projects/add' element={<p>Hola projects 3</p>} />
                    <Route path='skills' element={<p>Hola skills 1</p>} />
                    <Route path='skills/:id' element={<p>Hola skills 2</p>} />
                    <Route path='skills/add' element={<p>Hola skills 3</p>} />
                </>
            }
            <Route path='*' element={< Navigate to='/' />} />
        </Routes >
    );
};