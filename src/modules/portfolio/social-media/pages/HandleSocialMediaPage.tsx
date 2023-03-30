import { useHandleSocialMedia } from './hook';

export const HandleSocialMediaPage = () => {
    const { onSubmit, loading, register } = useHandleSocialMedia();


    return (
        <div>
            <h1 className='title'>SM</h1>
            <form onSubmit={onSubmit}>
                <select value={0} className='input-select mb-4'
                    {...register('name', {
                        required: true
                    })}
                >
                    <option value='Facebook'>Facebook</option>
                    <option value='Github'>Github</option>
                    <option value='Instagram'>Instagram</option>
                    <option value='LinkedIn'>LinkedIn</option>
                    <option value='Twitter'>Twitter</option>
                    <option value='Web Personal'>Web Personal</option>
                    <option value='Whatsapp'>Whatsapp</option>
                    <option value='Youtube'>Youtube</option>
                </select>
                <input type='text' placeholder='https://' maxLength={255} className='input-text col-span-2'
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
        </div>
    );
};