import { useHandleProfile } from '../hooks';

export const HandleProfilePage = () => {

    const { handleSubmit, hasEnglishDesc, hasEnglishAboutMe, loading, onSubmitProfile, register, errors } = useHandleProfile();

    return (
        <div className='
            w-5/6 sm:w-1/2 lg:w-1/3 p-5 pb-2 my-7
            bg-secondary border border-primary rounded-md
        '>
            <h1 className='
                mb-2
                text-center text-lg font-semibold
            '>PERFIL</h1>
            <form onSubmit={handleSubmit(onSubmitProfile)} className='grid grid-cols-4 gap-3'>
                <input
                    type='text'
                    placeholder='Nombre y Apellido'
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
                    placeholder='Usuario'
                    maxLength={15}
                    className={`
                            py-1 px-2 w-full h-9
                            col-span-2
                            text-secondary bg-primary border ${errors.username?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                            focus:outline-none
                        `}
                    {...register('username', {
                        required: true,
                        minLength: 4,
                        maxLength: 15
                    })}
                />
                <input
                    disabled
                    type='text'
                    placeholder='Email'
                    maxLength={100}
                    className={`
                        py-1 px-2 w-full h-9
                        col-span-4
                        text-secondary text-center bg-secondary border ${errors.email?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                        focus:outline-none
                    `}
                    {...register('email', {
                        required: true,
                        maxLength: 100
                    })}
                />
                <div className='col-span-4 flex flex-col'>
                    <label className='ml-1'>Titular</label>
                    <textarea
                        placeholder='Titular'
                        maxLength={255}
                        className={`
                            h-14 px-2 py-1
                            text-secondary bg-primary border ${errors.nativeDesc?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                            focus:outline-none
                        `}
                        {...register('nativeDesc', {
                            required: true,
                            maxLength: 255
                        })}
                    />
                </div>
                <div className={`h-10 col-span-4 ${hasEnglishDesc ? 'col-span-1 flex-col' : 'flex-row'} h-full flex justify-center items-center`}>
                    <label className={`mr-2 ${hasEnglishDesc && 'mb-2'}`}>Titular en Ingles</label>
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
                        placeholder='English Holder...'
                        maxLength={255}
                        className={`
                            h-14 px-2 py-1
                            col-span-4
                            text-secondary bg-primary border ${errors.englishDesc?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                            focus:outline-none
                        `}
                        {...register('englishDesc', {
                            required: true,
                            maxLength: 255
                        })} />
                }
                <input
                    type='text'
                    placeholder='Estado/Ciudad'
                    maxLength={50}
                    className={`
                        py-1 px-2 w-full h-9
                        col-span-2
                        text-secondary bg-primary border ${errors.locationState?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                        focus:outline-none
                    `}
                    {...register('locationState', {
                        maxLength: 50
                    })}
                />
                <input
                    type='text'
                    placeholder='Pais'
                    maxLength={50}
                    className={`
                        py-1 px-2 w-full h-9
                        col-span-2
                        text-secondary bg-primary border ${errors.locationCountry?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                        focus:outline-none
                    `}
                    {...register('locationCountry', {
                        maxLength: 50
                    })}
                />
                <input
                    type='text'
                    placeholder='Telefono'
                    maxLength={16}
                    className={`
                        py-1 px-2 w-1/2 h-9 mx-auto
                        col-span-4
                        text-secondary bg-primary border ${errors.phone?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                        focus:outline-none
                    `}
                    {...register('phone', {
                        maxLength: 16
                    })}
                />
                <div className='col-span-4 flex flex-col'>
                    <label className='ml-1'>Sobre mi</label>
                    <textarea
                        placeholder='Sobre mi...'
                        maxLength={255}
                        className={`
                            h-28 px-2 py-1
                            text-secondary bg-primary border ${errors.nativeAboutMe?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                            focus:outline-none
                        `}
                        {...register('nativeAboutMe', {
                            required: true,
                            maxLength: 255
                        })}
                    />
                </div>
                <div className={`h-10 col-span-4 ${hasEnglishAboutMe ? 'col-span-1 flex-col' : 'flex-row'} h-full flex justify-center items-center`}>
                    <label className={`mr-2 ${hasEnglishAboutMe && 'mb-2'}`}>Sobre mi en Ingles</label>
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
                        {...register('hasEnglishAboutMe')}
                    />
                </div>
                {hasEnglishAboutMe &&
                    <textarea
                        placeholder='English About me...'
                        maxLength={255}
                        className={`
                            h-28 px-2 py-1
                            col-span-4
                            text-secondary bg-primary border ${errors.englishAboutMe?.type ? 'border-red-600' : 'border-primary'} rounded-lg
                            focus:outline-none
                        `}
                        {...register('englishAboutMe', {
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
