import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../../hooks';
import { RootState, useAppDispatch } from '../../../store';
import { Education } from '../models';

export const EducationHandlePage = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { id, username } = useParams();

    const { activeUser } = useSelector((state: RootState) => state.portfolio);

    if (id && activeUser.educations.find(ed => ed.id === id) === undefined) {
        navigate(`/${username}`);
    }

    const education = id ? activeUser.educations.find(ed => ed.id === id) as Education : new Education();

    const { formState: formStateEducation, onInputChange: onInputChangeEducation, setFormState } = useForm(education);

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

    // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     if (id) {
    //         return dispatch(startUpdatingEducation(formState));
    //     }
    //     return dispatch(startAddingEducation(formState));
    // };

    return (
        <>
            <h1 className='mb-3 text-2xl uppercase font-semibold text-left'>Educacion</h1>
            <div className="
                w-5/6 lg:w-1/2
                bg-secondary
                rounded-lg border border-primary
            ">
                <form className="p-5 grid grid-cols-4 gap-3">
                    <input className='p-2 col-span-2' name='titleName' maxLength={50} placeholder='Titulo' onChange={onInputChangeEducation} value={titleName} />
                    <input className='p-2 col-span-2' name='institute' maxLength={50} placeholder='Institucion' onChange={onInputChangeEducation} value={institute} />
                    <textarea className='h-28 col-span-4 px-2 py-1' name='nativeDesc' maxLength={255} placeholder='Descripcion...' onChange={onInputChangeEducation} value={nativeDesc} />
                    <div className='h-10 col-span-4 sm:col-span-1 sm:h-full flex flex-row justify-center items-center'>
                        <label className='mr-2'>Ingles</label>
                        <input type='checkbox' className='px-2 pb-1' onChange={onChangeHasEnglish} checked={hasEnglishDesc} />
                    </div>
                    {hasEnglishDesc && <textarea className='h-28 col-span-4 sm:col-span-3 px-2 py-1' name='englishDesc' maxLength={255} placeholder='English Description...' onChange={onInputChangeEducation} value={englishDesc} />}

                    <div className='h-full flex flex-col sm:flex-row justify-center items-center'>
                        <label className='mb-1 sm:mr-2 sm:mb-0 text-center'>Es Actual</label>
                        <input type='checkbox' className='px-2 pb-1' onChange={onChangeIsActual} checked={isActual} />
                    </div>
                    <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 col-span-3'>
                        <div className='h-14 flex flex-col justify-between items-center'>
                            <label className='text-center'>Mes inicio</label>
                            <input type='number' className='w-14 text-center px-2' min={1} max={12} maxLength={2} name='monthStart' onChange={onInputChangeDate} value={monthStart} />
                        </div>
                        <div className='h-14 flex flex-col justify-between items-center'>
                            <label className='text-center'>Anio inicio</label>
                            <input type='number' className='w-24 text-center px-2' min={1900} max={new Date().getUTCFullYear()} maxLength={4} name='yearStart' onChange={onInputChangeDate} value={yearStart} />
                        </div>
                        {
                            !isActual &&
                            <>
                                <div className='h-14 flex flex-col justify-between items-center'>
                                    <label className='text-center'>Mes fin</label>
                                    <input type='number' className='w-14 text-center px-2' min={1} max={12} maxLength={2} name='monthEnd' onChange={onInputChangeDate} value={monthEnd} />
                                </div>
                                <div className='h-14 flex flex-col justify-between items-center'>
                                    <label className='text-center'>Anio fin</label>
                                    <input type='number' className='w-24 text-center px-2' min={1900} max={new Date().getUTCFullYear()} maxLength={4} name='yearEnd' onChange={onInputChangeDate} value={yearEnd} />
                                </div>
                            </>
                        }
                    </div>
                </form>
            </div>
        </>
    );
};
