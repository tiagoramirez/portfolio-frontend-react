import { LoadingPage } from '../../../pages';
import { useHandleEducation } from '../hooks';

export const EducationHandlePage = () => {

    const { handleSubmit, hasEnglishDesc, isActual, loading, onSubmitEducation, register } = useHandleEducation();

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <>
            <h1 className='mb-3 text-2xl uppercase font-semibold text-left'>Educacion</h1>
            <div className="
                w-5/6 lg:w-1/2
                bg-secondary
                rounded-lg border border-primary
            ">
                <form onSubmit={handleSubmit(onSubmitEducation)} className="p-5 grid grid-cols-4 gap-3">
                    <div className='flex flex-col col-span-2'>
                        <label className='mb-2'>Titulo:</label>
                        <input className='p-2 text-secondary bg-primary border border-primary rounded-lg focus:outline-none' {...register('titleName', { required: true })} />
                    </div>
                    <div className='flex flex-col col-span-2'>
                        <label className='mb-2'>Instituto:</label>
                        <input className='p-2 text-secondary bg-primary border border-primary rounded-lg focus:outline-none' {...register('institute', { required: true })} />
                    </div>
                    <div className='flex flex-col col-span-4'>
                        <label className='mb-2'>Descripcion:</label>
                        <textarea className='h-28 px-2 py-1 text-secondary bg-primary border border-primary rounded-lg focus:outline-none' {...register('nativeDesc', { required: true })} />
                    </div>
                    <div className={`h-10 col-span-4 ${hasEnglishDesc && 'sm:col-span-1'} sm:h-full flex flex-row justify-center items-center`}>
                        <label className='mr-2'>Ingles</label>
                        <input type='checkbox' className="bg-primary before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-lime-500 checked:before:bg-lime-500 hover:before:opacity-10" {...register('hasEnglishDesc')} />
                    </div>
                    {hasEnglishDesc &&
                        <div className='flex flex-col col-span-3'>
                            <label className='mb-2'>English Description:</label>
                            <textarea className='h-28 px-2 py-1 text-secondary bg-primary border border-primary rounded-lg focus:outline-none' {...register('englishDesc')} />
                        </div>
                    }
                    <div className='h-full flex flex-col sm:flex-row justify-center items-center'>
                        <label className='mb-1 sm:mr-2 sm:mb-0 text-center'>Es Actual</label>
                        <input type='checkbox' className="bg-primary before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-lime-500 checked:before:bg-lime-500 hover:before:opacity-10" {...register('isActual')} />
                    </div>
                    <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 col-span-3'>
                        <div className='h-14 flex flex-col justify-between items-center'>
                            <label className='text-center'>Mes inicio</label>
                            <input type='number' className='w-14 text-secondary text-center px-2 bg-primary border border-primary rounded-lg focus:outline-none' {...register('monthStart', { required: true })} />
                        </div>
                        <div className='h-14 flex flex-col justify-between items-center'>
                            <label className='text-center'>Anio inicio</label>
                            <input type='number' className='w-24 text-secondary text-center px-2 bg-primary border border-primary rounded-lg focus:outline-none' {...register('yearStart', { required: true })} />
                        </div>
                        {
                            !isActual &&
                            <>
                                <div className='h-14 flex flex-col justify-between items-center'>
                                    <label className='text-center'>Mes fin</label>
                                    <input type='number' className='w-14 text-secondary text-center px-2 bg-primary border border-primary rounded-lg focus:outline-none' {...register('monthEnd')} />
                                </div>
                                <div className='h-14 flex flex-col justify-between items-center'>
                                    <label className='text-center'>Anio fin</label>
                                    <input type='number' className='w-24 text-secondary text-center px-2 bg-primary border border-primary rounded-lg focus:outline-none' {...register('yearEnd')} />
                                </div>
                            </>
                        }
                    </div>
                    <div className='col-span-4 flex justify-center mt-4'>
                        <button className='w-1/3 h-10 rounded-lg bg-btnSecondary border border-primary hover:bg-btnPrimary hover:border-secondary hover:text-secondary focus:outline-none transition duration-200 ease-in-out' type='submit'>Guardar</button>
                    </div>
                </form>
            </div>
        </>
    );
};
