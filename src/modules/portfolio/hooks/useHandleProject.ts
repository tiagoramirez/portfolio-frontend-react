import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, startAddingProject, startUpdatingProject, useAppDispatch } from '../../../store';
import { Project } from '../models';

export const useHandleProject = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { id, username } = useParams();

    const { activeUser, loading } = useSelector((state: RootState) => state.portfolio);

    if (id && activeUser.projects.find(proj => proj.id === id) === undefined) {
        navigate(`/${username}`);
    }

    const project = id ? activeUser.projects.find(proj => proj.id === id) as Project : new Project();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Project>({
        defaultValues: project
    });

    const hasEnglishDesc = watch('hasEnglishDesc');

    const onRedirect = () => navigate(`/${username}/edit/projects`);

    const onSubmitProject: SubmitHandler<Project> = data => {

        if (!hasEnglishDesc) data.englishDesc = undefined;        

        if (id) {
            return dispatch(startUpdatingProject(data, onRedirect));
        }
        return dispatch(startAddingProject(data, onRedirect));
    };

    return {
        errors,
        handleSubmit,
        hasEnglishDesc,
        loading,
        onSubmitProject,
        register
    };
};