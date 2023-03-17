import { useHandleProfile } from '../hooks';

export const HandleProfilePage = () => {

    const { handleSubmit, hasEnglishDesc, loading, onSubmitProfile, register, locationCountry, locationState } = useHandleProfile();

    return (
        <div className='main-container'>
            <h1 className='mb-2 text-center text-lg font-semibold'>PERFIL</h1>
            <form onSubmit={handleSubmit(onSubmitProfile)} className='grid grid-cols-4 gap-3'>
                <input type='text' placeholder='Nombre y Apellido' maxLength={50} className='input-text col-span-2'
                    {...register('name', {
                        required: true,
                        maxLength: 50
                    })}
                />
                <input type='text' placeholder='Usuario' maxLength={15} className='input-text col-span-2'
                    {...register('username', {
                        required: true,
                        minLength: 4,
                        maxLength: 15
                    })}
                />
                <input disabled type='text' placeholder='Email' maxLength={100} className='input-text col-span-4 text-center w-1/2 mx-auto italic'
                    {...register('email', {
                        required: true,
                        maxLength: 100
                    })}
                />
                <textarea placeholder='Titular' maxLength={255} className='input-textarea h-14 col-span-4'
                    {...register('nativeDesc', {
                        required: hasEnglishDesc,
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
                    <textarea placeholder='English Holder...' maxLength={255} className='input-textarea h-14 col-span-4'
                        {...register('englishDesc', {
                            required: true,
                            maxLength: 255
                        })} />
                }
                <input type='text' placeholder='Estado/Ciudad' maxLength={50} className='input-text col-span-2'
                    {...register('locationState', {
                        required: locationCountry.length > 0,
                        maxLength: 50
                    })}
                />
                <input type='text' placeholder='Pais' maxLength={50} className='input-text col-span-2'
                    {...register('locationCountry', {
                        required: locationState.length > 0,
                        maxLength: 50
                    })}
                />
                <input type='text' placeholder='Telefono' maxLength={16} className='input-text col-span-4 w-1/2 mx-auto'
                    {...register('phone', {
                        maxLength: 16
                    })}
                />
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
