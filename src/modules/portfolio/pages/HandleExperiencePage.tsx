import { useHandleExperience } from '../hooks';

export const HandleExperiencePage = () => {

    const { handleSubmit, hasEnglishDesc, isActual, loading, onSubmitExperience, register, errors } = useHandleExperience();

    return (
        <div className='
            w-5/6 sm:w-1/2 lg:w-1/3 p-5 pb-2
            bg-secondary border border-primary rounded-md
        '>
            <h1 className='
                mb-2
                text-center text-lg font-semibold
            '>EXPERIENCIA</h1>
            <form onSubmit={handleSubmit(onSubmitExperience)} className='grid grid-cols-4 gap-4'>
                <input
                    type='text'
                    placeholder='Posicion'
                    maxLength={100}
                    className={`
                        py-1 px-2 w-full h-9
                        col-span-2
                        text-secondary bg-input border ${errors.position?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                        focus:outline-none
                    `}
                    {...register('position', {
                        required: true,
                        maxLength: 100
                    })}
                />
                <input
                    type='text'
                    placeholder='Empresa'
                    maxLength={50}
                    className={`
                        py-1 px-2 w-full h-9
                        col-span-2
                        text-secondary bg-input border ${errors.company?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                        focus:outline-none
                    `}
                    {...register('company', {
                        required: true,
                        maxLength: 50
                    })}
                />
                <textarea
                    placeholder='Descripcion...'
                    maxLength={255}
                    className={`
                        h-28 px-2 py-1
                        col-span-4
                        text-secondary bg-input border ${errors.nativeDesc?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                        focus:outline-none
                    `}
                    {...register('nativeDesc', {
                        required: true,
                        maxLength: 255
                    })}
                />
                <div className={`h-10 col-span-4 ${hasEnglishDesc ? 'col-span-1 flex-col' : 'flex-row'} h-full flex justify-center items-center`}>
                    <label className={`mr-2 ${hasEnglishDesc && 'mb-2'}`}>Ingles</label>
                    <input
                        type='checkbox'
                        className='
                                h-5 w-5
                                relative
                                bg-input appearance-none rounded-md border border-primary
                                cursor-pointer
                                transition-all 
                                before:content[""] peer before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity
                                checked:border-secondary checked:bg-orange-300 checked:before:bg-orange-300
                                hover:before:opacity-10
                            '
                        {...register('hasEnglishDesc')}
                    />
                </div>
                {hasEnglishDesc &&
                    <textarea
                        placeholder='English description...'
                        maxLength={255}
                        className={`
                                h-28 px-2 py-1
                                col-span-4
                                text-secondary bg-input border ${errors.englishDesc?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                                focus:outline-none
                            `}
                        {...register('englishDesc', {
                            required: true,
                            maxLength: 255
                        })} />
                }
                <select
                    className='
                        h-9 w-1/2 mx-auto
                        col-span-4
                        text-center border border-primary rounded-lg
                        focus:outline-none
                    '
                    {...register('type', {
                        required: true
                    })}>
                    <option value={0}>Full Time</option>
                    <option value={1}>Part Time</option>
                    <option value={2}>Freelance</option>
                    <option value={3}>Volunteer</option>
                </select>
                <div className='h-full flex flex-col justify-center items-center'>
                    <label className='mb-1 text-center'>Es Actual</label>
                    <input
                        type='checkbox'
                        className='
                            h-5 w-5
                            relative
                            bg-input appearance-none rounded-md border border-primary
                            cursor-pointer
                            transition-all 
                            before:content[""] peer before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity
                            checked:border-secondary checked:bg-orange-300 checked:before:bg-orange-300
                            hover:before:opacity-10
                        '
                        {...register('isActual')}
                    />
                </div>
                <div className='grid grid-cols-2 gap-4 col-span-3'>
                    <div className='h-14 flex flex-col justify-between items-center'>
                        <label className='text-center'>Mes inicio</label>
                        <input
                            type='number'
                            maxLength={2}
                            max={12}
                            min={1}
                            className={`
                                w-14 px-2
                                text-secondary text-center bg-input border ${errors.monthStart?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                                focus:outline-none
                            `}
                            {...register('monthStart', {
                                required: true,
                                maxLength: 2,
                                max: 12,
                                min: 1
                            })}
                        />
                    </div>
                    <div className='h-14 flex flex-col justify-between items-center'>
                        <label className='text-center'>Anio inicio</label>
                        <input
                            type='number'
                            maxLength={4}
                            minLength={4}
                            max={new Date().getUTCFullYear()}
                            min={1900}
                            className={`
                                w-24 px-2
                                text-secondary text-center bg-input border ${errors.yearStart?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                                focus:outline-none
                            `}
                            {...register('yearStart', {
                                required: true,
                                maxLength: 4,
                                minLength: 4,
                                max: new Date().getUTCFullYear(),
                                min: 1900
                            })}
                        />
                    </div>
                    {
                        !isActual &&
                        <>
                            <div className='h-14 flex flex-col justify-between items-center'>
                                <label className='text-center'>Mes fin</label>
                                <input
                                    type='number'
                                    maxLength={2}
                                    max={12}
                                    min={1}
                                    className={`
                                        w-14 px-2
                                        text-secondary text-center bg-input border ${errors.monthEnd?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                                        focus:outline-none
                                    `}
                                    {...register('monthEnd', {
                                        required: true,
                                        maxLength: 2,
                                        max: 12,
                                        min: 1
                                    })}
                                />
                            </div>
                            <div className='h-14 flex flex-col justify-between items-center'>
                                <label className='text-center'>Anio fin</label>
                                <input
                                    type='number'
                                    maxLength={4}
                                    minLength={4}
                                    max={new Date().getUTCFullYear()}
                                    min={1900}
                                    className={`
                                        w-24 px-2
                                        text-secondary text-center bg-input border ${errors.yearEnd?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                                        focus:outline-none
                                    `}
                                    {...register('yearEnd', {
                                        required: true,
                                        maxLength: 4,
                                        minLength: 4,
                                        max: new Date().getUTCFullYear(),
                                        min: 1900
                                    })}
                                />
                            </div>
                        </>
                    }
                </div>
                {
                    loading
                        ?
                        <span className='loader col-span-4'></span>
                        :
                        <div className='col-span-4 flex justify-center'>
                            <button className='w-1/3 h-10 rounded-lg bg-btn border border-primary hover:bg-btn hover:border-secondary hover:text-secondary focus:outline-none transition duration-200 ease-in-out' type='submit'>Guardar</button>
                        </div>
                }
            </form>
        </div>
    );
};
