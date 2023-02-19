import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, startAddingExperience, startUpdatingExperience, useAppDispatch } from '../../../store';
import { Experience } from '../models';

interface Inputs extends Experience {
    monthStart?: number;
    yearStart?: number;
    monthEnd?: number;
    yearEnd?: number;
}

export const useHandleExperience = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { id, username } = useParams();

    const { activeUser, loading } = useSelector((state: RootState) => state.portfolio);

    if (id && activeUser.experiences.find(exp => exp.id === id) === undefined) {
        navigate(`/${username}`);
    }

    const experience = id ? activeUser.experiences.find(exp => exp.id === id) as Experience : new Experience();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            ...experience,
            monthStart: experience.start ? new Date(experience.start).getUTCMonth() + 1 : undefined,
            yearStart: experience.start ? new Date(experience.start).getUTCFullYear() : undefined,
            monthEnd: experience.end ? new Date(experience.end).getUTCMonth() + 1 : undefined,
            yearEnd: experience.end ? new Date(experience.end).getUTCFullYear() : undefined,
        }
    });

    const hasEnglishDesc = watch('hasEnglishDesc');

    const isActual = watch('isActual');

    const onRedirect = () => navigate(`/${username}/edit/experiences`);

    const formattedDate = (year: number, month: number) => {
        const formattedMonth = month < 10 && !month.toString().startsWith('0') ? `0${month.toString()}` : month;
        return `${year}-${formattedMonth}-01`;
    };

    const onSubmitExperience: SubmitHandler<Inputs> = data => {

        if (!hasEnglishDesc) data.englishDesc = undefined;

        data.start = formattedDate(data.yearStart as number, data.monthStart as number);

        if (!data.isActual) data.end = formattedDate(data.yearEnd as number, data.monthEnd as number);

        data.type = parseInt(data.type.toString());

        if (id) {
            return dispatch(startUpdatingExperience(data, onRedirect));
        }
        return dispatch(startAddingExperience(data, onRedirect));
    };

    return {
        errors,
        handleSubmit,
        hasEnglishDesc,
        isActual,
        loading,
        onSubmitExperience,
        register
    };
};