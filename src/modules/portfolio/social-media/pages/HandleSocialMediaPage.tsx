import { useHandleSocialMedia } from './hook';

export const HandleSocialMediaPage = () => {
    const { onSubmit, loading, register } = useHandleSocialMedia();


    return (
        <section>
            <h1 className='text-center'>SM</h1>
            <form onSubmit={onSubmit}>
                <select className='mb-4'
                    {...register('name', {
                        required: true
                    })}
                >
                    {['Facebook', 'Github', 'Instagram', 'LinkedIn', 'Twitter', 'Web Personal', 'Whatsapp', 'Youtube'].map((opt, i) => <option key={opt} value={i}>{opt}</option>)}
                </select>
                <input type='text' placeholder='https://' maxLength={255} className='col-span-2 mb-2'
                    {...register('url', {
                        required: true,
                        maxLength: 255,
                        pattern: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
                    })}
                />
                {
                    loading
                        ?
                        <span className='loader'></span>
                        :
                        <button className='w-1/3 mt-2 mx-auto' type='submit'>Guardar</button>
                }
            </form>
        </section>
    );
};