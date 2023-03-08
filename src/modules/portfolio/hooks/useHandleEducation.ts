import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store';
import { startAddingEducation, startUpdatingEducation } from '../../../store/portfolio';
import { Education } from '../models';

interface Inputs extends Education {
    monthStart?: number;
    yearStart?: number;
    monthEnd?: number;
    yearEnd?: number;
}

export const useHandleEducation = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { id, username } = useParams();

    const { activeUser, loading } = useSelector((state: RootState) => state.portfolio);

    if (id && activeUser.educations.find(ed => ed.id === id) === undefined) {
        navigate(`/${username}`);
    }

    const education = id ? activeUser.educations.find(ed => ed.id === id) as Education : new Education();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            ...education,
            monthStart: education.start ? new Date(education.start).getUTCMonth() + 1 : undefined,
            yearStart: education.start ? new Date(education.start).getUTCFullYear() : undefined,
            monthEnd: education.end ? new Date(education.end).getUTCMonth() + 1 : undefined,
            yearEnd: education.end ? new Date(education.end).getUTCFullYear() : undefined,
        }
    });

    const hasEnglishDesc = watch('hasEnglishDesc');

    const isActual = watch('isActual');

    const onRedirect = () => navigate(`/${username}/edit/educations`);

    const formattedDate = (year: number, month: number) => {
        const formattedMonth = month < 10 && !month.toString().startsWith('0') ? `0${month.toString()}` : month;
        return `${year}-${formattedMonth}-01`;
    };

    const onSubmitEducation: SubmitHandler<Inputs> = data => {

        if (!hasEnglishDesc) data.englishDesc = undefined;

        data.start = formattedDate(data.yearStart as number, data.monthStart as number);

        if (!data.isActual) data.end = formattedDate(data.yearEnd as number, data.monthEnd as number);

        data.type = parseInt(data.type.toString());

        if (id) {
            return dispatch(startUpdatingEducation(data, onRedirect));
        }
        return dispatch(startAddingEducation(data, onRedirect));
    };

    return {
        errors,
        handleSubmit,
        hasEnglishDesc,
        isActual,
        loading,
        onSubmitEducation,
        register
    };
};