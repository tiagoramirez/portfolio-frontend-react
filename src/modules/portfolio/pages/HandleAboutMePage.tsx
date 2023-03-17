import { useHandleProfile } from '../hooks';

export const HandleAboutMePage = () => {

    const { handleSubmit, hasEnglishAboutMe, loading, onSubmitProfile, register } = useHandleProfile();

    return (
        <div className='main-container'>
            <h1 className='mb-2 text-center text-lg font-semibold'>SOBRE MI</h1>
            <form onSubmit={handleSubmit(onSubmitProfile)} className='grid grid-cols-4 gap-3'>
                <textarea placeholder='Sobre mi...' maxLength={255} className='input-textarea col-span-4'
                    {...register('nativeAboutMe', {
                        required: true,
                        maxLength: 255
                    })}
                />
                <div className='flex justify-center items-center col-span-4'>
                    <label className='mr-2'>Ingles</label>
                    <input type='checkbox' className='input-check'
                        {...register('hasEnglishAboutMe')}
                    />
                </div>
                {hasEnglishAboutMe &&
                    <textarea placeholder='English About me...' maxLength={255} className='input-textarea col-span-4'
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
                        <button className='btn col-span-4 w-1/3 mt-2 mx-auto' type='submit'>Guardar</button>
                }
            </form>
        </div>
    );
};
