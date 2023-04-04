import { useHandleProfile } from './hook';

export const HandleAboutMePage = () => {

    const { hasEnglishAboutMe, loading, register, onSubmit } = useHandleProfile();

    return (
        <section>
            <h1 className='text-center'>SOBRE MI</h1>
            <form onSubmit={onSubmit} className='grid grid-cols-4 gap-3'>
                <textarea placeholder='Sobre mi...' maxLength={500} className='col-span-4'
                    {...register('nativeAboutMe', {
                        required: hasEnglishAboutMe,
                        maxLength: 500
                    })}
                />
                <div className='flex justify-center items-center col-span-4'>
                    <label className='mr-2'>Ingles</label>
                    <input type='checkbox'{...register('hasEnglishAboutMe')} />
                </div>
                {hasEnglishAboutMe &&
                    <textarea placeholder='English About me...' maxLength={500} className='col-span-4'
                        {...register('englishAboutMe', {
                            required: true,
                            maxLength: 500
                        })} />
                }
                {
                    loading
                        ?
                        <span className='loader col-span-4'></span>
                        :
                        <button className='col-span-4 w-1/3 mt-2 mx-auto' type='submit'>Guardar</button>
                }
            </form>
        </section>
    );
};
