import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { RootState, startAddingEducation, startUpdatingEducation, useAppDispatch } from '../../../store';

interface Inputs {
    titleName: string;
    institute: string;
    type: number;
    isActual: boolean;
    start: string;
    end?: string;
    nativeDesc: string;
    hasEnglishDesc: boolean;
    englishDesc?: string;
    monthStart: number;
    yearStart: number;
    monthEnd: number;
    yearEnd: number;
}

export const useHandleEducation = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { activeUser, loading } = useSelector((state: RootState) => state.portfolio);

    const { register, handleSubmit, watch } = useForm<Inputs>();

    const hasEnglishDesc = watch('hasEnglishDesc');

    const isActual = watch('isActual');

    const { id, username } = useParams();

    if (id && activeUser.educations.find(ed => ed.id === id) === undefined) {
        navigate(`/${username}`);
    }

    const onRedirect = () => navigate(`/${username}/edit/educations`);

    const onSubmitEducation: SubmitHandler<Inputs> = data => {
        if (data.monthStart > 12 || data.monthStart < 1 || data.yearStart > new Date().getUTCFullYear() || data.yearStart < 1900) return Swal.fire('Education', 'Fecha de inicio invalida', 'error');
        data.start = `${data.yearStart}-${data.monthStart}-01`;
        if (!data.isActual) {
            if (
                data.yearEnd === undefined
                || data.monthEnd === undefined
                || data.monthEnd > 12
                || data.monthEnd < 1
                || data.yearEnd > new Date().getUTCFullYear()
                || data.yearEnd < 1900
            ) return Swal.fire('Education', 'Fecha de fin invalida', 'error');
            data.end = `${data.yearEnd}-${data.monthEnd}-01`;
        }
        if (id) {
            return dispatch(startUpdatingEducation(data, onRedirect));
        }
        console.log(data);
        return dispatch(startAddingEducation(data, onRedirect));
    };

    return {
        handleSubmit,
        hasEnglishDesc,
        isActual,
        loading,
        onSubmitEducation,
        register
    };
};