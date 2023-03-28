import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store';
import { startAddingProject, startUpdatingProject } from '../../../store/portfolio';
import { Project } from '../models';
import { breaklineCount } from './helpers';

export const useHandleProject = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { id, username } = useParams();

    const { activeUser, loading } = useSelector((state: RootState) => state.portfolio);

    if (id && activeUser.projects.find(proj => proj.id === id) === undefined) {
        navigate(`/${username}`);
    }

    const project = id ? activeUser.projects.find(proj => proj.id === id) as Project : new Project();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Project>({ defaultValues: project });

    const hasEnglishDesc = watch('hasEnglishDesc');

    const onRedirect = () => navigate(`/${username}/edit/projects`);

    const onSubmitProject: SubmitHandler<Project> = data => {
        if (breaklineCount(data.nativeDesc) > 2) return toast.error('La descripcion no puede tener mas de 3 lineas!');

        if (!hasEnglishDesc) data.englishDesc = undefined;
        else if (breaklineCount(data.englishDesc) > 2) return toast.error('Description could not be more than 3 lines!');

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