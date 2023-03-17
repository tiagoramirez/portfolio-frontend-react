import { useHandleEducation } from '../hooks';

export const HandleEducationPage = () => {

    const { handleSubmit, hasEnglishDesc, isActual, loading, onSubmitEducation, register } = useHandleEducation();

    return (
        <div className='main-container'>
            <h1 className='mb-2 text-center text-lg font-semibold'>EDUCACION</h1>
            <form onSubmit={handleSubmit(onSubmitEducation)} className='grid grid-cols-4 gap-4'>
                <input type='text' placeholder='Titulo' maxLength={50} className='input-text col-span-2'
                    {...register('titleName', {
                        required: true,
                        maxLength: 50
                    })}
                />
                <input type='text' placeholder='Instituto' maxLength={50} className='input-text col-span-2'
                    {...register('institute', {
                        required: true,
                        maxLength: 50
                    })}
                />
                <textarea placeholder='Descripcion...' maxLength={255} className='input-textarea col-span-4'
                    {...register('nativeDesc', {
                        required: true,
                        maxLength: 255
                    })}
                />
                <div className='flex justify-center items-center col-span-4'>
                    <label className='mr-2'>Ingles</label>
                    <input type='checkbox' className='input-check'
                        {...register('hasEnglishDesc')}
                    />
                </div>
                {hasEnglishDesc &&
                    <textarea placeholder='English description...' maxLength={255} className='input-textarea col-span-4'
                        {...register('englishDesc', {
                            required: true,
                            maxLength: 255
                        })} />
                }
                <select className='input-select col-span-4'
                    {...register('type', {
                        required: true
                    })}>
                    <option value={0}>High School</option>
                    <option value={1}>College</option>
                    <option value={2}>Graduate School</option>
                    <option value={3}>Tertiary Degree</option>
                </select>
                <div className='h-full flex flex-col justify-center items-center'>
                    <label className='mb-1 text-center'>Es Actual</label>
                    <input type='checkbox' className='input-check'
                        {...register('isActual')}
                    />
                </div>
                <div className='grid grid-cols-2 gap-4 col-span-3'>
                    <input type='number' placeholder='Mes inicio' maxLength={2} max={12} min={1}
                        className='input-text text-center w-24 mx-auto'
                        {...register('monthStart', {
                            required: true,
                            maxLength: 2,
                            max: 12,
                            min: 1
                        })}
                    />
                    <input type='number' placeholder='Año inicio' maxLength={4} minLength={4} max={new Date().getUTCFullYear()} min={1900}
                        className='input-text text-center w-24 mx-auto'
                        {...register('yearStart', {
                            required: true,
                            maxLength: 4,
                            minLength: 4,
                            max: new Date().getUTCFullYear(),
                            min: 1900
                        })}
                    />
                    {
                        !isActual &&
                        <>
                            <input type='number' placeholder='Mes fin' maxLength={2} max={12} min={1}
                                className='input-text text-center w-24 mx-auto'
                                {...register('monthEnd', {
                                    required: true,
                                    maxLength: 2,
                                    max: 12,
                                    min: 1
                                })}
                            />
                            <input type='number' placeholder='Año fin' maxLength={4} minLength={4} max={new Date().getUTCFullYear()} min={1900}
                                className='input-text text-center w-24 mx-auto'
                                {...register('yearEnd', {
                                    required: true,
                                    maxLength: 4,
                                    minLength: 4,
                                    max: new Date().getUTCFullYear(),
                                    min: 1900
                                })}
                            />
                        </>
                    }
                </div>
                {
                    loading
                        ?
                        <span className='loader col-span-4'></span>
                        :
                        <button className='btn col-span-4 w-1/3 mt-2 mx-auto' type='submit'>Guardar</button>
                }
            </form>
        </div>
    );
};
