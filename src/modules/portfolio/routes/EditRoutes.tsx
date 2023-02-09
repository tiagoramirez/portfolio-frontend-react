import { Navigate, Route, Routes } from 'react-router-dom';
import { useEdit } from '../hooks';
import { EducationHandlePage } from '../pages';
import { EducationView } from '../views';

export const EditRoutes = () => {

    const { isSameUserParamAuth } = useEdit();

    return (
        <Routes>
            {
                isSameUserParamAuth &&
                <>
                    <Route path="about-me" element={<p>Hola about</p>} />
                    <Route path="educations" element={<EducationView isEdit />} />
                    <Route path="educations/:id" element={<EducationHandlePage />} />
                    <Route path="educations/add" element={<EducationHandlePage />} />
                    <Route path="experiences" element={<p>Hola experiences 1</p>} />
                    <Route path="experiences/:id" element={<p>Hola experiences 2</p>} />
                    <Route path="experiences/add" element={<p>Hola experiences 3</p>} />
                    <Route path="profile" element={<p>Hola profile</p>} />
                    <Route path="projects" element={<p>Hola projects 1</p>} />
                    <Route path="projects/:id" element={<p>Hola projects 2</p>} />
                    <Route path="projects/add" element={<p>Hola projects 3</p>} />
                    <Route path="skills" element={<p>Hola skills 1</p>} />
                    <Route path="skills/:id" element={<p>Hola skills 2</p>} />
                    <Route path="skills/add" element={<p>Hola skills 3</p>} />
                </>
            }
            <Route path="*" element={< Navigate to="/" />} />
        </Routes >
    );
};