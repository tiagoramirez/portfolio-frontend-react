import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../../hooks';
import { RootState, startAddingEducation, startUpdatingEducation, useAppDispatch } from '../../../store';
import { Education } from '../models';

export const useHandleEducation = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { id, username } = useParams();

    const { activeUser, loading } = useSelector((state: RootState) => state.portfolio);

    if (id && activeUser.educations.find(ed => ed.id === id) === undefined) {
        navigate(`/${username}`);
    }

    const education = id ? activeUser.educations.find(ed => ed.id === id) as Education : new Education();

    const { formState: formStateEducation, onInputChange: onInputChangeEducation, setFormState } = useForm(education);


    console.log('formStateEducation: ');
    console.log(formStateEducation);


    const { titleName, institute, nativeDesc, hasEnglishDesc, englishDesc, isActual, start, type, end } = formStateEducation;

    const { formState: formStateDate, onInputChange: onInputChangeDate } = useForm({
        monthStart: new Date(start).getUTCMonth(),
        yearStart: new Date(start).getUTCFullYear(),
        monthEnd: end ? new Date(end).getUTCMonth() : undefined,
        yearEnd: end ? new Date(end).getUTCFullYear() : undefined
    });

    const { monthEnd, monthStart, yearEnd, yearStart } = formStateDate;

    const onChangeHasEnglish = () => {
        setFormState({
            ...formStateEducation,
            hasEnglishDesc: !hasEnglishDesc
        });
    };

    const onChangeIsActual = () => {
        setFormState({
            ...formStateEducation,
            isActual: !isActual
        });
    };

    const onRedirect = () => navigate(`/${username}/edit/educations`);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormState({
            ...formStateEducation,
            start: new Date(yearStart, monthStart + 1),
            end: isActual ? undefined : new Date(yearEnd as number, monthEnd as number + 1)
        });
        if (id) {
            return dispatch(startUpdatingEducation(formStateEducation, onRedirect));
        }
        return dispatch(startAddingEducation(formStateEducation, onRedirect));
    };

    return {
        englishDesc,
        hasEnglishDesc,
        institute,
        isActual,
        loading,
        monthEnd,
        monthStart,
        nativeDesc,
        onChangeHasEnglish,
        onChangeIsActual,
        onInputChangeDate,
        onInputChangeEducation,
        onSubmit,
        titleName,
        type,
        yearEnd,
        yearStart
    };
};