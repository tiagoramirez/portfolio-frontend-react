import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { RootState, startAddingEducation, startUpdatingEducation, useAppDispatch } from '../../../store';
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

    const { activeUser, loading } = useSelector((state: RootState) => state.portfolio);

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const hasEnglishDesc = watch('hasEnglishDesc');

    const isActual = watch('isActual');

    const { id, username } = useParams();

    if (id && activeUser.educations.find(ed => ed.id === id) === undefined) {
        navigate(`/${username}`);
    }

    const onRedirect = () => navigate(`/${username}/edit/educations`);

    const formattedDate = (year: number, month: number) => {
        const formattedMonth = month < 10 && !month.toString().startsWith('0') ? `0${month.toString()}` : month;
        return `${year}-${formattedMonth}-01`;
    };

    const onSubmitEducation: SubmitHandler<Inputs> = data => {
        if (
            data.monthStart as number > 12
            || data.monthStart as number < 1
            || data.yearStart as number > new Date().getUTCFullYear()
            || data.yearStart as number < 1900
        ) return Swal.fire('Education', 'Fecha de inicio invalida', 'error');

        data.start = formattedDate(data.yearStart as number, data.monthStart as number);

        if (!data.isActual) {
            if (
                data.yearEnd === undefined
                || data.monthEnd === undefined
                || data.monthEnd > 12
                || data.monthEnd < 1
                || data.yearEnd > new Date().getUTCFullYear()
                || data.yearEnd < 1900
            ) return Swal.fire('Education', 'Fecha de fin invalida', 'error');
            data.end = formattedDate(data.yearEnd as number, data.monthEnd as number);
        }        
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