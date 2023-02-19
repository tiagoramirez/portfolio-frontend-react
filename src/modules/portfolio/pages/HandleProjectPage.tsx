import { useHandleProject } from '../hooks';

export const HandleProjectPage = () => {

    const { handleSubmit, hasEnglishDesc, loading, onSubmitProject, register, errors } = useHandleProject();

    return (
        <div className='
            w-5/6 sm:w-1/2 lg:w-1/3 p-5 pb-2
            bg-secondary border border-primary rounded-md
        '>
            <h1 className='
                mb-2
                text-center text-lg font-semibold
            '>PROYECTO</h1>
            <form onSubmit={handleSubmit(onSubmitProject)} className='grid grid-cols-4 gap-4'>
                <input
                    type='text'
                    placeholder='Nombre'
                    maxLength={50}
                    className={`
                        py-1 px-2 w-full h-9
                        col-span-2
                        text-secondary bg-primary border ${errors.name?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                        focus:outline-none
                    `}
                    {...register('name', {
                        required: true,
                        maxLength: 50
                    })}
                />
                <input
                    type='text'
                    placeholder='Link:  https://'
                    maxLength={255}
                    className={`
                        py-1 px-2 w-full h-9
                        col-span-2
                        text-secondary bg-primary border ${errors.url?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                        focus:outline-none
                    `}
                    {...register('url', {
                        required: true,
                        maxLength: 255,
                        pattern: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
                    })}
                />
                <textarea
                    placeholder='Descripcion...'
                    maxLength={255}
                    className={`
                        h-28 px-2 py-1
                        col-span-4
                        text-secondary bg-primary border ${errors.nativeDesc?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                        focus:outline-none
                    `}
                    {...register('nativeDesc', {
                        required: true,
                        maxLength: 255
                    })}
                />
                <div className={`h-10 col-span-4 ${hasEnglishDesc ? 'flex-col col-span-1' : 'flex-row'} h-full flex justify-center items-center`}>
                    <label className={`mr-2 ${hasEnglishDesc && 'mb-2'}`}>Ingles</label>
                    <input
                        type='checkbox'
                        className='
                            h-5 w-5
                            relative
                            bg-primary appearance-none rounded-md border border-primary
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
                            col-span-3
                            text-secondary bg-primary border ${errors.englishDesc?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                            focus:outline-none
                        `}
                        {...register('englishDesc', {
                            required: true,
                            maxLength: 255
                        })} />
                }
                {
                    loading
                        ?
                        <span className='loader col-span-4'></span>
                        :
                        <div className='col-span-4 flex justify-center'>
                            <button className='w-1/3 h-10 rounded-lg bg-btnSecondary border border-primary hover:bg-btnPrimary hover:border-secondary hover:text-secondary focus:outline-none transition duration-200 ease-in-out' type='submit'>Guardar</button>
                        </div>
                }
            </form>
        </div>
    );
};
